import styles from './index.less';
// @ts-ignore
import ReactWeui from 'react-weui';
const { Button } = ReactWeui;

export default function IndexPage() {
  return (
    <div>
      <h1 className={styles.title}>umijs mfsu错误</h1>

      <Button>Button</Button>
    </div>
  );
}
