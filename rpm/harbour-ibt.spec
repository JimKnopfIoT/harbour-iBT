#
# iBT — passive Bluetooth / BLE security & analysis tool for Sailfish OS
#

Name:       harbour-ibt

%{!?qtc_qmake:%define qtc_qmake %qmake}
%{!?qtc_qmake5:%define qtc_qmake5 %qmake5}
%{!?qtc_make:%define qtc_make make}
%{?qtc_builddir:%define _builddir %qtc_builddir}
Summary:    Passive Bluetooth / BLE scanner and tracker/attack detector
Version:    0.1.0
Release:    1
Group:      Qt/Qt
License:    GPLv3
URL:        https://github.com/JimKnopfIoT/harbour-ibt
Source0:    %{name}-%{version}.tar.bz2
Requires:   sailfishsilica-qt5 >= 0.10.9
Requires:   qt5-qtdeclarative-import-sensors
Requires:   qt5-qtdeclarative-import-positioning
Requires:   bluez5
BuildRequires:  pkgconfig(sailfishapp) >= 1.0.2
BuildRequires:  pkgconfig(Qt5Core)
BuildRequires:  pkgconfig(Qt5Qml)
BuildRequires:  pkgconfig(Qt5Quick)
BuildRequires:  pkgconfig(Qt5Sensors)
BuildRequires:  pkgconfig(Qt5DBus)
BuildRequires:  pkgconfig(Qt5Network)
BuildRequires:  desktop-file-utils

%description
iBT passively observes nearby Bluetooth / BLE devices through the phone's own
radio (BlueZ). It reads only freely broadcast advertising data — name, MAC,
RSSI, services and manufacturer data — decodes beacons (iBeacon / Eddystone /
AltBeacon), flags unwanted trackers (AirTag / SmartTag / Tile) and detects
advertising-based attacks (BLE-spam floods). It is strictly passive: it never
transmits, never intercepts traffic, never attacks devices, and neither logs
nor exports scan data.

%prep
%setup -q -n %{name}-%{version}

%build
%qtc_qmake5
%qtc_make %{?_smp_mflags}

%install
rm -rf %{buildroot}
%qmake5_install

desktop-file-install --delete-original       \
  --dir %{buildroot}%{_datadir}/applications             \
   %{buildroot}%{_datadir}/applications/*.desktop

%files
%defattr(644,root,root,755)
%attr(755,root,root) %{_bindir}/%{name}
%{_datadir}/%{name}
%{_datadir}/applications/%{name}.desktop
%{_datadir}/icons/hicolor/*/apps/%{name}.png
