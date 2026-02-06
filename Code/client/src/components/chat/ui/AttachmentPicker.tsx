import { FaImage } from 'react-icons/fa';
import IconButton from '../../ui/IconButton';
export default function AttachmentPicker() {
  return (
    <IconButton
      icon={<FaImage />}
      onClick={() => alert('Pick image (mock)')}
    />
  );
}
