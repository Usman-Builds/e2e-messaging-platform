'use client';

import IconButton from '@/components/ui/IconButton';
import { FaPhone, FaVideo } from 'react-icons/fa';
import { useThemeColors } from '@/hooks/useThemeColors';

type Props = {
  type: 'audio' | 'video';
  onClick?: () => void;
};

export default function CallButton({ type, onClick }: Props) {
  const colors = useThemeColors();
  const icon = type === 'audio' ? <FaPhone color={colors.primary} /> : <FaVideo color={colors.primary} />;

  return <IconButton icon={icon} onClick={onClick} />;
}
