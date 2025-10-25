"use client";

import { useSession } from "next-auth/react";
import { useEffect, useMemo, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { HiXMark } from "react-icons/hi2";

export default function LoginToast() {
  // FIRST Call BOTH hooks unconditionally, in a stable order
  const { status, data } = useSession();                 
  const pathname = usePathname();
  const isMembers = pathname === "/members";

  const prevStatus = useRef(status);
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState<string>("");
  const [dotClass, setDotClass] = useState<string>("bg-neutral-400");
  const lastNameRef = useRef<string>("");
  const defaultShownRef = useRef(false);

  const username = useMemo(() => {
    const n = data?.user?.name?.trim();
    if (n) return n;
    const email = data?.user?.email ?? "";
    return email.split("@")[0] || "user";
  }, [data?.user?.name, data?.user?.email]);

  useEffect(() => {
    if (!isMembers) return;                                
    if (status === "authenticated" && username) {
      lastNameRef.current = username;
      defaultShownRef.current = false;
    }
  }, [status, username, isMembers]);

  useEffect(() => {
    if (!isMembers) return;
    if (prevStatus.current !== "authenticated" && status === "authenticated") {
      setMessage(`Logged in as ${username}`);
      setDotClass("bg-green-500");
      setOpen(true);
      const t = setTimeout(() => setOpen(false), 5000);
      prevStatus.current = status;
      return () => clearTimeout(t);
    }
    prevStatus.current = status;
  }, [status, username, isMembers]);

  useEffect(() => {
    if (!isMembers) return;
    if (prevStatus.current === "authenticated" && status === "unauthenticated") {
      setMessage(`${lastNameRef.current || "User"} has logged off`);
      setDotClass("bg-neutral-400");
      setOpen(true);
      defaultShownRef.current = true; 
      const t = setTimeout(() => setOpen(false), 5000);
      return () => clearTimeout(t);
    }
  }, [status, isMembers]);

  useEffect(() => {
    if (!isMembers) return;
    if (status === "unauthenticated" && !defaultShownRef.current) {
      defaultShownRef.current = true;
      const t = setTimeout(() => {
        setMessage("Log in to see more content");
        setDotClass("bg-blue-500");
        setOpen(true);
        setTimeout(() => setOpen(false), 5000);
      }, 200);
      return () => clearTimeout(t);
    }
  }, [status, isMembers]);

  if (!isMembers || !open) return null;

  return (
    <div className="fixed inset-x-0 bottom-4 z-[100] flex justify-center px-4">
      <div className="w-full max-w-md rounded-lg bg-white text-neutral-900 shadow-lg ring-1 ring-black/10">
        <div className="flex items-center gap-3 p-4">
          <span className={`mt-0.5 inline-block h-2.5 w-2.5 rounded-full ${dotClass}`} />
          <p className="text-sm font-medium">{message}</p>
          <button
            onClick={() => setOpen(false)}
            className="ml-auto rounded p-1 hover:bg-neutral-100"
            aria-label="Close notification"
            type="button"
          >
            <HiXMark className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
