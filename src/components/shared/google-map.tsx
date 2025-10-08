"use client";

interface GoogleMapProps {
  address?: string;
  className?: string;
}

export function GoogleMap({
  address = "20 rue Greneta, 75002 Paris",
  className = "",
}: GoogleMapProps): JSX.Element {
  // Encode the address for the URL
  const encodedAddress = encodeURIComponent(address);

  return (
    <div className={`w-full ${className}`}>
      <iframe
        src={`https://maps.google.com/maps?q=${encodedAddress}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="rounded-lg shadow-lg"
        title="Location Map"
      />
    </div>
  );
}
