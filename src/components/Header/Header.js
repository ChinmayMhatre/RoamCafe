
import Link from "next/link";
import { auth } from "../../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
const Header = () => {
  const [user, loading] = useAuthState(auth);

  return (
    <nav className="flex justify-between items-center py-10 w-[70vw] mx-auto">
      <Link href="/">
        <button className="text-lg font-medium">
          <img src="/Group 1.png" alt="" srcset="" />
        </button>
      </Link>
      <ul className="flex items-center gap-10">
        {!user && (
          <Link href={"/auth/login"} legacyBehavior className="z-50">
            <a className="py-2 px-4 text-sm bg-cyan-500 text-white rounded-lg font-medium ml-8">
              Join Now
            </a>
          </Link>
        )}
        {user && (
          <div className="flex items-center gap-8 border-[#dadada] border-[1px] bg-white drop-shadow-md py-4 px-12 rounded-xl">
            <Link href="/landing">
              <p>
                Home
              </p>
            </Link>
            <Link href="/">
              <p>
                Product
              </p>
            </Link>
            <Link href="/" >
              <button onClick={()=>signOut(auth)}>
                Logout
              </button>
            </Link>
          </div>
        )}
      </ul>
    </nav>
  )
};

export default Header;
