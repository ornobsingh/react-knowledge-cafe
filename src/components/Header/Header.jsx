import profile from "../../assets/images/profile.png";

export default function Header() {
  return (
    <header className="flex justify-between items-center my-4 border-b-2 py-4">
      <h2 className="text-4xl font-bold">React Knowledge Cafe</h2>
      <img src={profile} alt="" />
    </header>
  );
}
