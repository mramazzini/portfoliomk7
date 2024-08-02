import Image from "next/image";
import Link from "next/link";
import useModal from "./useModal";
import RomaPizzaData from "./Modals/RomaPizzaData";
import DndWikiData from "./Modals/DndWikiData";
import NullartMusicData from "./Modals/NullartMusicData";
import GameEngineData from "./Modals/GameEngineData";

const Projects = () => {
  const { modal: romaModal, openModal: openRomaModal } = useModal({
    id: "roma",
    children: <RomaPizzaData />,
  });
  const { modal: dndModal, openModal: openDndModal } = useModal({
    id: "dnd",
    children: <DndWikiData />,
  });
  const { modal: nullartModal, openModal: openNullartModal } = useModal({
    id: "nullart",
    children: <NullartMusicData />,
  });
  const { modal: gameModal, openModal: openGameModal } = useModal({
    id: "game",
    children: <GameEngineData />,
  });
  return (
    <div className="w-full flex flex-col xl:flex-row bg-base-200 rounded-xl md:p-8 p-3">
      {/* modals */}
      {romaModal}
      {nullartModal}
      {dndModal}
      {gameModal}
      {/* featured prioject */}
      <div className="featured-project xl:w-1/2 bg-base-100  p-2 md:p-4">
        {/* roma */}
        <div className="project p-2 md:p-4  rounded-xl">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between md:h-36">
            <div className="header flex flex flex-col items-start md:p-4">
              <h3 className="text-3xl font-bold">Roma Pizza</h3>
              <p>A Pizza Restaurant Template</p>
            </div>
            <div className="buttons  flex flex-row  mt-2">
              <button
                className="btn btn-ghost btn-sm md:btn-md  mr-2 border border-white/50"
                onClick={openRomaModal}
              >
                Read About It <span className="hidden md:inline">-&gt;</span>
              </button>
              <Link
                href="https://restaurant-template-rosy.vercel.app/"
                target="_blank"
                className="btn btn-primary btn-sm md:btn-md"
              >
                View Project <span className="hidden md:inline">-&gt;</span>
              </Link>
            </div>
          </div>
          <div className="divider divider-primary mt-0" />

          <Link
            href="https://restaurant-template-rosy.vercel.app/"
            target="_blank"
            className="rounded-xl"
          >
            <Image
              src="/RomaPizza.png"
              width={718}
              height={452}
              className="rounded-xl "
              alt="Roma Pizza Image"
            />{" "}
          </Link>
        </div>{" "}
        <div className="divider md:hidden" />
        {/* nullart */}
        <div className="project p-2 md:p-4 rounded-xl mt-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between md:h-36">
            <div className="header flex flex flex-col items-start md:p-4">
              <h3 className="text-3xl font-bold">Nullart Music</h3>
              <p>A Music Sampler for Nullart Music</p>
            </div>
            <div className="buttons flex flex-row  mt-2">
              <button
                className="btn btn-ghost btn-sm md:btn-md  mr-2 border border-white/50"
                onClick={openNullartModal}
              >
                Read About It <span className="hidden md:inline">-&gt;</span>
              </button>
              <Link
                href="https://lex-music.vercel.app/"
                target="_blank"
                className=" btn btn-primary btn-sm md:btn-md"
              >
                View Project <span className="hidden md:inline">-&gt;</span>
              </Link>
            </div>
          </div>
          <div className="divider divider-primary mt-0" />

          <Link
            href="https://lex-music.vercel.app/"
            target="_blank"
            className="rounded-xl"
          >
            <Image
              src="/Nullart.png"
              width={718}
              height={452}
              className="rounded-xl "
              alt="Nullart Music Image"
            />{" "}
          </Link>
        </div>
      </div>{" "}
      <div className="divider md:hidden" />
      {/* wiki */}
      <div className="featured-project xl:w-1/2 bg-base-100  px-2 md:px-4">
        <div className="project p-2 md:p-4 rounded-xl mt-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between md:h-36">
            <div className="header flex flex flex-col items-start md:p-4">
              <h3 className="text-3xl font-bold">Max&apos;s DND Wiki</h3>
              <p>A Community Wiki Page for Dungeons in Dragons (WIP)</p>
            </div>
            <div className="buttons flex flex-row  mt-2">
              <button
                className="btn btn-ghost btn-sm md:btn-md  mr-2 border border-white/50"
                onClick={openDndModal}
              >
                Read About It <span className="hidden md:inline">-&gt;</span>
              </button>
              <Link
                href="https://world-ashen.vercel.app/"
                target="_blank"
                className=" btn btn-primary btn-sm md:btn-md"
              >
                View Project <span className="hidden md:inline">-&gt;</span>
              </Link>
            </div>
          </div>
          <div className="divider divider-primary mt-0" />

          <Link
            href="https://world-ashen.vercel.app/"
            target="_blank"
            className="rounded-xl"
          >
            <Image
              src="/dnd.png"
              width={718}
              height={452}
              className="rounded-xl "
              alt="Max's DND Wiki Image"
            />{" "}
          </Link>
        </div>
        <div className="divider md:hidden" />
        {/* engine */}
        <div className="project p-2 md:p-4 rounded-xl mt-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between md:h-36">
            <div className="header flex flex flex-col items-start md:p-4">
              <h3 className="text-3xl font-bold">Game Engine</h3>
              <p>Two part Game Engine and Game Editor</p>
            </div>
            <div className="buttons flex flex-row  mt-2">
              <button
                className="btn btn-ghost btn-sm md:btn-md  mr-2 border border-white/50"
                onClick={openGameModal}
              >
                Read About It <span className="hidden md:inline">-&gt;</span>
              </button>
              <Link
                href="https://github.com/mramazzini/C-Game-Engine"
                target="_blank"
                className=" btn btn-primary btn-sm md:btn-md"
              >
                View Project <span className="hidden md:inline">-&gt;</span>
              </Link>
            </div>
          </div>
          <div className="divider divider-primary mt-0" />

          <Link
            href="https://github.com/mramazzini/C-Game-Engine"
            target="_blank"
            className="rounded-xl"
          >
            <Image
              src="/builder.png"
              width={718}
              height={452}
              className="rounded-xl "
              alt="Roma Pizza Image"
            />{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Projects;
