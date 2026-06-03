import FullLogo from "../assets/FullLogo";

export default function TopSection({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <section className="top-section">
      <FullLogo />
      <div>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    </section>
  );
}
