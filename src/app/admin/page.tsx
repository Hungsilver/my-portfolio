"use client";
import AnimationLottie from "@/components/animation-lottie/AnimationLottie";
import React, { useRef, useState } from "react";
import RunFunny from "@/helpers/assets/run-funny.json";
import { ElasticSlider } from "@/components/admin/animation/ElasticSlider";
import { ImVolumeIncrease } from "react-icons/im";
import { ImVolumeDecrease } from "react-icons/im";

const AdminPage = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  // const [volumn, setVolumn] = useState<number>(30);

  const playMusic = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen mx-2 gap-3">
      <audio ref={audioRef} src="/music/Zung_Zang_Zung_Ze.mp3" />
      <div className="flex gap-3">
        <h1 className="text-yellow-200">
          Không phải admin mà lại vào đây à !!!
        </h1>
        <button
          type="button"
          onClick={playMusic}
          className="border border-[#ec4899] px-2 rounded-lg hover:bg-white hover:text-red-500 transition-all duration-300"
        >
          Click vào đêy xem
        </button>
      </div>
      <div>
        {/* <ElasticSlider
          leftIcon={<ImVolumeDecrease />}
          rightIcon={<ImVolumeIncrease />}
          startingValue={0}
          defaultValue={volumn}
          maxValue={100}
          isStepped
          stepSize={10}
        /> */}
      </div>
      <div>
        <AnimationLottie animationPath={RunFunny} />
      </div>
    </div>
  );
};

export default AdminPage;
