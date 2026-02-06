'use client';

import { FaMicrophone } from 'react-icons/fa';
import IconButton from '@/components/ui/IconButton';
import { useThemeColors } from '@/hooks/useThemeColors';

export default function VoiceRecorder() {
  const colors = useThemeColors();

  return (
    <IconButton
      icon={<FaMicrophone />}
      onClick={() => alert('Voice recording (mock)')}
      style={{ color: colors.primary }}
    />
  );
}
