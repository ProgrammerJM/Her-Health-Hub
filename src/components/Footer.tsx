import Image from "next/image";

export default function Footer() {
  return (
    <div className="text-primary-foreground flex justify-around px-4 bg-pink-100">
      <div className="flex flex-col items-center justify-center w-full max-w-screen-lg px-4 py-4 gap-4">
        <Image src="/mainLogo.png" alt="Logo" width={40} height={40} />
        <p className="text-primary-foreground text-color  text-black ">
          © 2025 SafeHeaven
        </p>
      </div>
    </div>
  );
}
