import React from "react";
import { ContactInfo } from "../Utils/Data";

const MAP_QUERY = "24.6807384,46.7096329";
const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/place/24%C2%B040'50.7%22N+46%C2%B042'34.7%22E/@24.6807384,46.707058,17z/data=!3m1!4b1!4m4!3m3!8m2!3d24.6807384!4d46.7096329";
const EMBED_MAP_URL = `https://maps.google.com/maps?q=${MAP_QUERY}&z=17&output=embed`;

function Contact() {
  return (
    <div style={{ background: "#f7f3ed", minHeight: "100vh" }}>
      <section style={{ padding: "80px 0 40px" }}>
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "0 20px",
          }}
        >
          <div style={{ maxWidth: 680, marginBottom: 32 }}>
            <p
              style={{
                margin: "0 0 12px",
                color: "#8b5e3c",
                fontSize: 14,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                fontWeight: 700,
              }}
            >
              Contact Us
            </p>
            <h1
              style={{
                margin: "0 0 16px",
                color: "#171717",
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                lineHeight: 1.1,
              }}
            >
              Visit our location on the map
            </h1>
            <p
              style={{
                margin: 0,
                color: "#4b5563",
                fontSize: 16,
                lineHeight: 1.7,
              }}
            >
              The map below is set to your shared location:
              {" "}
              24°40&apos;50.7&quot;N 46°42&apos;34.7&quot;E.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 24,
              marginBottom: 32,
            }}
          >
            <div
              style={{
                background: "#ffffff",
                borderRadius: 24,
                padding: 24,
                boxShadow: "0 12px 35px rgba(0,0,0,0.08)",
              }}
            >
              <h2 style={{ margin: "0 0 12px", fontSize: 22, color: "#171717" }}>
                Contact Details
              </h2>
              <p style={{ margin: "0 0 10px", color: "#4b5563", lineHeight: 1.7 }}>
                <strong>Phone:</strong> {ContactInfo.contact_phone}
              </p>
              <p style={{ margin: "0 0 10px", color: "#4b5563", lineHeight: 1.7 }}>
                <strong>Email:</strong> {ContactInfo.contact_email}
              </p>
              <p style={{ margin: 0, color: "#4b5563", lineHeight: 1.7 }}>
                <strong>Location:</strong> 24°40&apos;50.7&quot;N 46°42&apos;34.7&quot;E
              </p>
            </div>

            <div
              style={{
                background: "#ffffff",
                borderRadius: 24,
                padding: 24,
                boxShadow: "0 12px 35px rgba(0,0,0,0.08)",
              }}
            >
              <h2 style={{ margin: "0 0 12px", fontSize: 22, color: "#171717" }}>
                Open in Google Maps
              </h2>
              <p style={{ margin: "0 0 18px", color: "#4b5563", lineHeight: 1.7 }}>
                Use the button below to open the exact shared location directly
                in Google Maps.
              </p>
              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  minHeight: 48,
                  padding: "0 20px",
                  borderRadius: 999,
                  background: "#171717",
                  color: "#ffffff",
                  textDecoration: "none",
                  fontWeight: 600,
                }}
              >
                Open Map
              </a>
            </div>
          </div>

          <div
            style={{
              background: "#ffffff",
              borderRadius: 28,
              padding: 12,
              boxShadow: "0 18px 45px rgba(0,0,0,0.10)",
            }}
          >
            <iframe
              title="Company location map"
              src={EMBED_MAP_URL}
              width="100%"
              height="520"
              style={{
                border: 0,
                borderRadius: 20,
                display: "block",
              }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
