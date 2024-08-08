import { useCallback } from 'react';
import { useAccount } from 'wagmi';
import DownloadFileFromIPFS from './DownloadFileFromIPFS';
import styles from './DownloadPopup.module.css'

export default function DownloadComponents() {
  const { address } = useAccount();

  return (
    <div className="flex items-center space-x-4">
      {address ? (
        <DownloadFileFromIPFS />
      ) : (
        <p className={styles.warning} >Connect wallet to use Download components</p>
      )}
    </div>
  );
}