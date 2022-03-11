import Image from "next/image";

export default function Track(track) {
  return (
    <div className="items-baseline md:w-1/4 text-center">
      {/* <p className="text-sm font-bold text-gray-400 dark:text-gray-600">
        {track.ranking}
      </p> */}

      <div className="pl-3">
        <a
          className="font-medium text-white font-weight: 800 text-lg "
          href={track.songUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div>
            <Image
              src={track.albumImage}
              width={100}
              height={100}
              alt={track.album}
              title={track.album}
            />
          </div>
          {track.title}
        </a>
        <p className="text-white mb-4 text-xs">{track.artist}</p>
      </div>
    </div>
  );
}
