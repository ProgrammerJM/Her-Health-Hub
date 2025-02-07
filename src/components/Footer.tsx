import Image from "next/image";

export default function Footer() {
  return (
    <div>
      <hr className=" w-full border-gray-300" />
      <div className="flex justify-center text-primary-foreground px-4 bg-pink-100 p-8">
        <p className=" text-black">© 2025 SafeHaven</p>
      </div>
    </div>
  );
}
