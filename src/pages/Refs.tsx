import BaseButton from "@/components/BaseButton";
// import wireframe from "@/assets/images/wireframe.png";

const Refs: React.FC = () => {
  return (
    <>
      <div className="p-8 w-full h-full">
        <h2 className="p-8 w-full text-2xl font-bold text-center">
          References
        </h2>
        <div className="container flex flex-col sm:flex-row justify-start items-center gap-4">
          <h3 className="p-8 text-xl">1. 官網改造</h3>
          <BaseButton
            onClick={() => window.open("https://www.spe3d.co", "_blank")}
          >
            SPE3D
          </BaseButton>
          <BaseButton
            onClick={() => window.open("https://newengen.com/", "_blank")}
          >
            NEW ENGEN
          </BaseButton>
        </div>
        <div className="container flex flex-col justify-start items-center gap-4">
          <div className="p-8 w-full">
            <h3 className="text-xl">2. WebAR</h3>
            <span>
              WebAR
              是一種結合了虛擬實境和擴增實境的技術，能夠在真實世界中疊加虛擬物體，提供更豐富的互動體驗。
            </span>
          </div>
          <span className="px-8 w-full">
            - ThreeJS, (Guandu-dock): 每一秒自動畫60張，吃手機效能。
          </span>
          <span className="px-8 w-full">
            - 呼叫原生相機, (Model-Viewer): 不卡，但裡面介面不好改。
          </span>
          <span className="px-8 w-full">
            - 串影流, (Snap): 卡，也是一秒畫60次。
          </span>
          <span className="px-8 w-full">
            - 預渲染, (APPLE):若動畫不需太多互動，可以考慮此方式。
          </span>
        </div>
      </div>
    </>
  );
};

export default Refs;
