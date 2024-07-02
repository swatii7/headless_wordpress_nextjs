import Link from 'next/link';
import { useRouter } from 'next/router';

export const MainMenu = ({ items }) => {
  const router = useRouter();
  const { slug } = router.query;

  const isHomePage = router.asPath === '/home';

  return (
    <div
      className={`container mx-auto h-16 relative text-center justify-center p-5 z-20 flex bg-transparent ${
        isHomePage ? 'text-white' : ''
      }`}
    >
      <div className="flex justify-center gap-8 mb-5">
        {(items || []).map((item, id) => (
          <div key={id}>
            <Link className="font-semibold" href={item.destination}>
              {item.label}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainMenu;
