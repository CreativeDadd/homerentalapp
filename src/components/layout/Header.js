import Link from 'next/link'
const Header = () => {
  return (
    <>
        <header className="flex justify-between items-center p-4">
      <Link href="/" className="text-primary font-semibold text-2xl">
        Orange-Sun Home
      </Link>
      <nav className="flex gap-8 items-center text-gray-500 font-semibold">
        <Link href="/">Home</Link>
        <Link href="/">Menu</Link>
        <Link href="/">About</Link>
        <Link href="/">Contact</Link>
      </nav>

      <nav className="flex gap-4 items-center text-gray-500 font-semibold ">
      <Link href={"/login"} className='border border-primary  py-2 px-8 rounded-full'>Login</Link>
      <Link href={"/register"} className="bg-primary py-2 px-8 rounded-full text-white ">Register</Link>
      </nav>
      
    </header>
    </>
  )
}

export default Header