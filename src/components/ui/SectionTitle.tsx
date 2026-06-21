type SectionTitleProps = {
  title: string;
  subtitle?: string;
  accent?: string;
};

export default function SectionTitle({ title, subtitle, accent }: SectionTitleProps) {
  if (accent) {
    const parts = title.split(accent);
    return (
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          {parts[0]}
          <span className="bg-gradient-to-r from-cyan-300 via-violet-300 to-pink-300 bg-clip-text text-transparent">
            {accent}
          </span>
          {parts[1]}
        </h2>
        {subtitle && (
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">{subtitle}</p>
        )}
      </div>
    );
  }

  return (
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-300 via-violet-300 to-pink-300 bg-clip-text text-transparent">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-foreground/70 max-w-2xl mx-auto">{subtitle}</p>
      )}
    </div>
  );
}
