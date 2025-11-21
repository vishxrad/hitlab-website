"use client";

import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { useTranslation } from "react-i18next";
import ContactFormModal from "@/components/ContactFormModal";

const FloatingContactButton = () => {
	const [open, setOpen] = useState(false);
	const { t } = useTranslation();

	return (
		<>
			<button
				type="button"
				onClick={() => setOpen(true)}
				className="fixed bottom-6 right-6 z-30 flex items-center gap-2 rounded-full bg-blue-600 px-4 py-3 text-sm font-medium text-white shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
			>
				<MessageCircle className="h-4 w-4" />
				<span>{t("contact.button")}</span>
			</button>

			<ContactFormModal isOpen={open} onClose={() => setOpen(false)} />
		</>
	);
};

export default FloatingContactButton;
