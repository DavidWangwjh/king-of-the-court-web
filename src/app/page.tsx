import Image from "next/image";

export default function Home() {
  const COMING_SOON = "Coming Soon!";
  return (
    <div className="flex items-center justify-center min-h-screen relative overflow-hidden">
      <div className="animate-background bg-cover bg-center">
        <div className="w-[120vw] h-[100vh] relative">
          <Image
            src="/assets/homebg.png"
            alt="Basketball court background"
            priority={true}
            layout="fill"
            objectFit="cover"
            quality={100}
            style={{ opacity: 0.3 }}
          />
        </div>
      </div>
      <div className="absolute flex flex-col items-center">
        <Image
          src="/assets/logo.png"
          alt="Logo"
          width={400}
          height={400}
        />
        <h1 className="mt-8 mb-16 text-5xl font-bold">
          {COMING_SOON.split(/(?!$)/).map((char, index) => (
            <span
              key={index}
              className="inline-block text-wavy text-gold"
              style={{
                animationDelay: `${index * 0.05}s`
              }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </h1>
      </div>
    </div>
  );
}
