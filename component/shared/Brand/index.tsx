import Image from "next/image";

const Brand = () => {
  return (
    <div className="w-full mx-auto">
      <div className="text-center">
        <div
          x-data="{}"
          x-init="$nextTick(() => {
                        let ul = $refs.logos;
                        ul.insertAdjacentHTML('afterend', ul.outerHTML);
                        ul.nextSibling.setAttribute('aria-hidden', 'true');
                    })"
          className="w-full inline-flex flex-nowrap overflow-hidden"
        >
          <ul
            x-ref="logos"
            className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
          >
            <li>
              <Image
                src="https://cruip-tutorials.vercel.app/logo-carousel/facebook.svg"
                alt="facebook"
                className="brightness-0 dark:brightness-100"
                width={110}
                height={20}
              />
            </li>
            <li>
              <Image
                src="https://cruip-tutorials.vercel.app/logo-carousel/apple.svg"
                alt="apple"
                className="brightness-0 dark:brightness-100"
                width={110}
                height={20}
              />
            </li>
            <li>
              <Image
                src="https://cruip-tutorials.vercel.app/logo-carousel/quora.svg"
                alt="quora"
                className="brightness-0 dark:brightness-100"
                width={110}
                height={20}
              />
            </li>
            <li>
              <Image
                src="https://cruip-tutorials.vercel.app/logo-carousel/disney.svg"
                alt="disney"
                className="brightness-0 dark:brightness-100"
                width={110}
                height={20}
              />
            </li>
            <li>
              <Image
                src="https://cruip-tutorials.vercel.app/logo-carousel/samsung.svg"
                alt="samsung"
                className="brightness-0 dark:brightness-100"
                width={110}
                height={20}
              />
            </li>
            <li>
              <Image
                src="https://cruip-tutorials.vercel.app/logo-carousel/airbnb.svg"
                alt="airbnb"
                className="brightness-0 dark:brightness-100"
                width={110}
                height={20}
              />
            </li>
            <li>
              <Image
                src="https://cruip-tutorials.vercel.app/logo-carousel/apple.svg"
                alt="apple"
                className="brightness-0 dark:brightness-100"
                width={110}
                height={20}
              />
            </li>
          </ul>
          <ul
            x-ref="logos"
            className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
          >
            <li>
              <Image
                src="https://cruip-tutorials.vercel.app/logo-carousel/facebook.svg"
                alt="facebook"
                className="brightness-0 dark:brightness-100"
                width={110}
                height={20}
              />
            </li>
            <li>
              <Image
                src="https://cruip-tutorials.vercel.app/logo-carousel/apple.svg"
                alt="apple"
                className="brightness-0 dark:brightness-100"
                width={110}
                height={20}
              />
            </li>
            <li>
              <Image
                src="https://cruip-tutorials.vercel.app/logo-carousel/quora.svg"
                alt="quora"
                className="brightness-0 dark:brightness-100"
                width={110}
                height={20}
              />
            </li>
            <li>
              <Image
                src="https://cruip-tutorials.vercel.app/logo-carousel/disney.svg"
                alt="disney"
                className="brightness-0 dark:brightness-100"
                width={110}
                height={20}
              />
            </li>
            <li>
              <Image
                src="https://cruip-tutorials.vercel.app/logo-carousel/samsung.svg"
                alt="samsung"
                className="brightness-0 dark:brightness-100"
                width={110}
                height={20}
              />
            </li>
            <li>
              <Image
                src="https://cruip-tutorials.vercel.app/logo-carousel/airbnb.svg"
                alt="airbnb"
                className="brightness-0 dark:brightness-100"
                width={110}
                height={20}
              />
            </li>
            <li>
              <Image
                src="https://cruip-tutorials.vercel.app/logo-carousel/apple.svg"
                alt="apple"
                className="brightness-0 dark:brightness-100"
                width={110}
                height={20}
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Brand;
