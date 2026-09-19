"use client";

import { ChevronDown, UserRound, UsersRound, X } from "lucide-react";
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

type ProfileCardTriggerProps = {
  count: number;
  role: string;
  variant?: "person" | "unit";
};

function ProfileCardTrigger({ count, role, variant = "person" }: ProfileCardTriggerProps) {
  const [hovered, setHovered] = useState(false);
  const [pinned, setPinned] = useState(false);
  const [spotlightIndex, setSpotlightIndex] = useState<number | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const isOpen = hovered || pinned;
  const profileId = `${role.toLowerCase()}-profile-cards`;
  const profiles = Array.from({ length: count }, (_, index) => `${role} ${index + 1}`);
  const isUnit = variant === "unit";

  useEffect(() => {
    if (!pinned) return;

    const closeFromOutside = (event: PointerEvent) => {
      if (!wrapperRef.current?.contains(event.target as Node)) {
        setPinned(false);
        setHovered(false);
        setSpotlightIndex(null);
        setSelectedIndex(null);
      }
    };
    const closeFromKeyboard = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        if (selectedIndex !== null) {
          setSelectedIndex(null);
          return;
        }
        setPinned(false);
        setHovered(false);
        setSpotlightIndex(null);
      }
    };

    document.addEventListener("pointerdown", closeFromOutside, true);
    document.addEventListener("keydown", closeFromKeyboard);
    return () => {
      document.removeEventListener("pointerdown", closeFromOutside, true);
      document.removeEventListener("keydown", closeFromKeyboard);
    };
  }, [pinned, selectedIndex]);

  const closeAll = () => {
    setPinned(false);
    setHovered(false);
    setSpotlightIndex(null);
    setSelectedIndex(null);
  };

  return (
    <div
      ref={wrapperRef}
      className={`chair-trigger-wrap ${isOpen ? "is-open" : ""} ${isUnit ? "is-unit" : ""} ${spotlightIndex !== null || selectedIndex !== null ? "has-spotlight" : ""}`}
      onPointerEnter={(event) => {
        if (event.pointerType === "mouse") setHovered(true);
      }}
      onPointerLeave={(event) => {
        if (event.pointerType === "mouse") {
          setHovered(false);
          if (!pinned) setSpotlightIndex(null);
        }
      }}
    >
      <button
        type="button"
        className="structure-card chair-trigger"
        aria-expanded={isOpen}
        aria-controls={profileId}
        onClick={() => {
          if (pinned && selectedIndex === null) {
            closeAll();
            return;
          }
          setPinned(true);
        }}
      >
        <strong>{count}</strong>
        <span className="structure-role">{role}</span>
        <span className="structure-hint">{isUnit ? "Lihat unit" : "Lihat pengurus"} <ChevronDown size={15} /></span>
      </button>

      <div id={profileId} className="chair-popover" aria-hidden={!isOpen}>
        <div className={`profile-card-fan fan-${count}`}>
          {profiles.map((profile, index) => {
            const isSelected = selectedIndex === index;
            const isSpotlit = spotlightIndex === index || isSelected;

            return (
              <article
                className={`profile-playing-card card-${index + 1} ${isSpotlit ? "is-spotlit" : ""} ${isSelected ? "is-profile-open" : ""}`}
                key={profile}
                onPointerEnter={(event) => {
                  if (event.pointerType === "mouse" && selectedIndex === null) setSpotlightIndex(index);
                }}
                onPointerLeave={(event) => {
                  if (event.pointerType === "mouse" && selectedIndex === null) setSpotlightIndex(null);
                }}
              >
                <button
                  type="button"
                  className="profile-card-action"
                  aria-label={`Buka profil ${profile}`}
                  aria-expanded={isSelected}
                  onFocus={() => setSpotlightIndex(index)}
                  onClick={(event) => {
                    event.stopPropagation();
                    setPinned(true);
                    setSpotlightIndex(index);
                    setSelectedIndex(isSelected ? null : index);
                  }}
                >
                  <div className="card-corner card-corner-top"><span>I</span><small>IMAJATOS</small></div>
                  <div className="profile-card-heading">
                    <strong>{profile}</strong>
                    {!isUnit && <span>Pengurus inti</span>}
                  </div>
                  <div className={`profile-photo-placeholder ${isUnit ? "is-group-photo" : ""}`}>
                    {isUnit ? <UsersRound aria-hidden="true" /> : <UserRound aria-hidden="true" />}
                    <span>{isUnit ? "Foto bersama" : "Foto"}</span>
                  </div>
                  {!isUnit && <div className="profile-card-copy"><span>Nama menunggu data resmi</span></div>}
                  <div className="card-corner card-corner-bottom"><span>I</span><small>IMAJATOS</small></div>
                </button>

                <div className="profile-detail" aria-hidden={!isSelected}>
                  <button
                    type="button"
                    className="profile-detail-close"
                    aria-label={`Tutup profil ${profile}`}
                    tabIndex={isSelected ? 0 : -1}
                    onClick={(event) => {
                      event.stopPropagation();
                      setSelectedIndex(null);
                    }}
                  >
                    <X size={16} />
                  </button>
                  <span>{isUnit ? "Profil unit" : "Profil pengurus"}</span>
                  <strong>{profile}</strong>
                  <p>{isUnit ? "Nama unit, susunan anggota, dan deskripsi menunggu data resmi." : "Nama, foto, dan informasi pengurus menunggu data resmi."}</p>
                </div>
              </article>
            );
          })}
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
          {unitStructure.map((item) => <ProfileCardTrigger {...item} variant="unit" key={item.role} />)}
        </div>
      </div>
    </div>
  );
}
