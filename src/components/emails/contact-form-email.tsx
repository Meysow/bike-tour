import { siteConfig } from "@/config/site";
import type { ContactFormData } from "@/lib/validations/contact-form";

interface ContactFormEmailProps {
  formData: ContactFormData;
}

export function ContactFormEmail({ formData }: ContactFormEmailProps) {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body
        style={{
          fontFamily:
            '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
          lineHeight: "1.6",
          color: "#333333",
          maxWidth: "600px",
          margin: "0 auto",
          padding: "20px",
          backgroundColor: "#ffffff",
        }}
      >
        <div
          style={{
            backgroundColor: "#ffffff",
            border: "1px solid #e5e7eb",
            borderRadius: "8px",
            padding: "30px",
            marginBottom: "20px",
          }}
        >
          {/* Header */}
          <div
            style={{
              borderBottom: "2px solid #f97316",
              paddingBottom: "20px",
              marginBottom: "30px",
            }}
          >
            <h1
              style={{
                color: "#f97316",
                fontSize: "24px",
                fontWeight: "bold",
                margin: "0 0 10px 0",
                fontFamily: "Urbanist, sans-serif",
              }}
            >
              🚴‍♂️ New Contact Form Submission
            </h1>
            <p style={{ color: "#6b7280", margin: "0", fontSize: "14px" }}>
              You have received a new message from your website
            </p>
          </div>

          {/* Contact Information */}
          <div style={{ marginBottom: "30px" }}>
            <h2
              style={{
                color: "#1f2937",
                fontSize: "18px",
                fontWeight: "600",
                marginBottom: "15px",
                paddingBottom: "10px",
                borderBottom: "1px solid #e5e7eb",
              }}
            >
              Contact Information
            </h2>
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                marginBottom: "20px",
              }}
            >
              <tbody>
                <tr>
                  <td
                    style={{
                      padding: "8px 0",
                      color: "#6b7280",
                      fontWeight: "500",
                      width: "100px",
                    }}
                  >
                    Name:
                  </td>
                  <td
                    style={{
                      padding: "8px 0",
                      color: "#1f2937",
                      fontWeight: "600",
                    }}
                  >
                    {formData.name}
                  </td>
                </tr>
                <tr>
                  <td
                    style={{
                      padding: "8px 0",
                      color: "#6b7280",
                      fontWeight: "500",
                    }}
                  >
                    Email:
                  </td>
                  <td
                    style={{
                      padding: "8px 0",
                      color: "#1f2937",
                    }}
                  >
                    <a
                      href={`mailto:${formData.email}`}
                      style={{
                        color: "#f97316",
                        textDecoration: "none",
                      }}
                    >
                      {formData.email}
                    </a>
                  </td>
                </tr>
                <tr>
                  <td
                    style={{
                      padding: "8px 0",
                      color: "#6b7280",
                      fontWeight: "500",
                    }}
                  >
                    Subject:
                  </td>
                  <td
                    style={{
                      padding: "8px 0",
                      color: "#1f2937",
                      fontWeight: "600",
                    }}
                  >
                    {formData.subject}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Message */}
          <div style={{ marginBottom: "30px" }}>
            <h2
              style={{
                color: "#1f2937",
                fontSize: "18px",
                fontWeight: "600",
                marginBottom: "15px",
                paddingBottom: "10px",
                borderBottom: "1px solid #e5e7eb",
              }}
            >
              Message
            </h2>
            <div
              style={{
                backgroundColor: "#f9fafb",
                border: "1px solid #e5e7eb",
                borderRadius: "6px",
                padding: "20px",
                color: "#374151",
                whiteSpace: "pre-wrap",
                lineHeight: "1.8",
              }}
            >
              {formData.message}
            </div>
          </div>

          {/* Footer */}
          <div
            style={{
              borderTop: "1px solid #e5e7eb",
              paddingTop: "20px",
              marginTop: "30px",
              textAlign: "center",
            }}
          >
            <p
              style={{
                color: "#6b7280",
                fontSize: "12px",
                margin: "0",
              }}
            >
              This email was sent from the contact form on{" "}
              <a
                href={siteConfig.url}
                style={{
                  color: "#f97316",
                  textDecoration: "none",
                }}
              >
                {siteConfig.name}
              </a>
            </p>
            <p
              style={{
                color: "#9ca3af",
                fontSize: "11px",
                margin: "10px 0 0 0",
              }}
            >
              {siteConfig.company.email} • {siteConfig.company.phone}
            </p>
          </div>
        </div>
      </body>
    </html>
  );
}
