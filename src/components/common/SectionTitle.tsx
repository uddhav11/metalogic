type SectionTitleProps = {
  title: string;
  subtitle: string;
  className?: string;
};

export const SectionTitle = ({ title, subtitle, className = '' }: SectionTitleProps) => {
  return (
    <div className={`text-center mb-12 ${className}`}>
      <h2 className="text-3xl font-bold text-gray-900 mb-4">{title}</h2>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
    </div>
  );
};