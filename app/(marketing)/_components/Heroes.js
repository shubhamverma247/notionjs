import Image from "next/image";

const Heroes = () => {
  return (
    <div className="flex flex-col items-center justify-center max-w-5xl">
      <div className="flex items-center">
        <div className="relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:w-[370px] md:h-[370px]">
          <Image
            src="/documents.png"
            fill
            className="object-contain"
            alt="Documents"
          />
        </div>
        <div className="relative h-[370px] w-[370px] hidden md:block">
          <Image
            src="/reading.png"
            fill
            className="object-contain"
            alt="Reading"
          />
        </div>
      </div>
    </div>
  );
};

export default Heroes;
