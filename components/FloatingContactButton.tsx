"use client";

import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { useTranslation } from "react-i18next";
import { usePathname } from "next/navigation";
import ContactFormModal from "@/components/ContactFormModal";

const FloatingContactButton = () => {
	const [open, setOpen] = useState(false);
	const { t } = useTranslation();
	const pathname = usePathname();

	if (pathname === "/contact") {
		return null;
	}

	return (
		<>
			<button
				type="button"
				onClick={() => setOpen(true)}
				className="fixed bottom-6 right-6 z-30 flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
				aria-label={t("contact.title")}
			>
				<MessageCircle className="h-6 w-6" />
			</button>

			<ContactFormModal isOpen={open} onClose={() => setOpen(false)} />
		</>
	);
};

export default FloatingContactButton;
