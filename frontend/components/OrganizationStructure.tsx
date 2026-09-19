"use client";

import { ChevronDown, UserRound } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const executiveStructure = [
  { count: 3, role: "Ketua" },
  { count: 2, role: "Sekretaris" },
  { count: 2, role: "Bendahara" },
];

const unitStructure = [
  { count: 3, role: "Biro" },
  { count: 4, role: "Departemen" },
];

function ProfileCardTrigger({ count, role }: { count: number; role: string }) {
  const [hovered, setHovered] = useState(false);
  const [pinned, setPinned] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const isOpen = hovered || pinned;
  const profileId = `${role.toLowerCase()}-profile-cards`;
  const profiles = Array.from({ length: count }, (_, index) => `${role} ${index + 1}`);

  useEffect(() => {
    if (!pinned) return;

    const closeFromOutside = (event: PointerEvent) => {
      if (!wrapperRef.current?.contains(event.target as Node)) {
        setPinned(false);
        setHovered(false);
      }
    };
    const closeFromKeyboard = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setPinned(false);
        setHovered(false);
      }
    };

    document.addEventListener("pointerdown", closeFromOutside, true);
    document.addEventListener("keydown", closeFromKeyboard);
    return () => {
      document.removeEventListener("pointerdown", closeFromOutside, true);
      document.removeEventListener("keydown", closeFromKeyboard);
    };
  }, [pinned]);

  return (
    <div
      ref={wrapperRef}
      className={`chair-trigger-wrap ${isOpen ? "is-open" : ""}`}
      onPointerEnter={(event) => {
        if (event.pointerType === "mouse") setHovered(true);
      }}
      onPointerLeave={(event) => {
        if (event.pointerType === "mouse") setHovered(false);
      }}
      onKeyDown={(event) => {
        if (event.key === "Escape") {
          setPinned(false);
          setHovered(false);
        }
      }}
    >
      <button
        type="button"
        className="structure-card chair-trigger"
        aria-expanded={isOpen}
        aria-controls={profileId}
        onClick={() => {
          if (pinned) {
            setPinned(false);
            setHovered(false);
            return;
          }

          setPinned(true);
        }}
      >
        <strong>{count}</strong>
        <span className="structure-role">{role}</span>
        <span className="structure-hint">Lihat profil <ChevronDown size={15} /></span>
      </button>

      <div id={profileId} className="chair-popover" aria-hidden={!isOpen}>
        <div className={`profile-card-fan fan-${count}`}>
          {profiles.map((profile, index) => (
            <article className={`profile-playing-card card-${index + 1}`} key={profile}>
              <div className="card-corner card-corner-top"><span>I</span><small>IMAJATOS</small></div>
              <div className="profile-photo-placeholder"><UserRound aria-hidden="true" /><span>Foto</span></div>
              <div className="profile-card-copy"><strong>{profile}</strong><span>Nama menunggu data resmi</span></div>
              <div className="card-corner card-corner-bottom"><span>I</span><small>IMAJATOS</small></div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

export function OrganizationStructure() {

  return (
    <div className="structure-chart">
      <div className="structure-group">
        <span className="structure-label">Pengurus Inti</span>
        <div className="structure-cards">
          {executiveStructure.map((item) => <ProfileCardTrigger {...item} key={item.role} />)}
        </div>
      </div>

      <div className="structure-connector" aria-hidden="true" />

      <div className="structure-group">
        <span className="structure-label">Unit Organisasi</span>
        <div className="structure-cards structure-cards-units">
          {unitStructure.map((item) => (
            <article className="structure-card structure-card-unit" key={item.role}>
              <strong>{item.count}</strong><h3>{item.role}</h3><p>nama unit menunggu data resmi</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
