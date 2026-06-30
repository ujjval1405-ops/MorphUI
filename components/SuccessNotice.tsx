// components/SuccessNotice.tsx
interface NoticeProps {
  title: string;
  message: string;
}

export default function SuccessNotice({ title, message }: NoticeProps) {
  return (
    <div className="p-4 bg-teal-950/20 border border-teal-800/30 text-teal-400 rounded-xl flex flex-col gap-1">
      <strong className="text-sm font-semibold">{title}</strong>
      <span className="text-xs text-teal-500/80">{message}</span>
    </div>
  );
}