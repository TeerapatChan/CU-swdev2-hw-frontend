import Link from "next/link";

export default function TopMenuItem({title, pageRef}:{title:string, pageRef:string}) {
    return (
        <Link href={pageRef} className="text-center mt-auto mb-auto text-white">
            {title}
        </Link>
    );
}