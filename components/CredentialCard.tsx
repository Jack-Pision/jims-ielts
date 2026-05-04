"use client";

interface Credential {
  label: string;
  value: string;
}

interface CredentialCardProps {
  credentials: Credential[];
}

export function CredentialCard({ credentials }: CredentialCardProps) {
  return (
    <div className="relative bg-dark-emerald border-2 border-brand-gold rounded-lg p-6">
      {/* Header */}
      <div className="border-b border-brand-gold/30 pb-4 mb-4">
        <p className="text-label text-brand-gold text-center">CREDENTIALS</p>
      </div>

      {/* Credentials List */}
      <div className="space-y-4">
        {credentials.map((credential) => (
          <div key={credential.label} className="border-b border-brand-gold/20 pb-3 last:border-0 last:pb-0">
            <p className="text-xs text-white/50 uppercase tracking-wider mb-1">
              {credential.label}
            </p>
            <p className="font-display text-lg text-white">{credential.value}</p>
          </div>
        ))}
      </div>

      {/* Decorative corners */}
      <div className="absolute top-2 left-2 w-3 h-3 border-l-2 border-t-2 border-brand-gold" />
      <div className="absolute top-2 right-2 w-3 h-3 border-r-2 border-t-2 border-brand-gold" />
      <div className="absolute bottom-2 left-2 w-3 h-3 border-l-2 border-b-2 border-brand-gold" />
      <div className="absolute bottom-2 right-2 w-3 h-3 border-r-2 border-b-2 border-brand-gold" />
    </div>
  );
}
