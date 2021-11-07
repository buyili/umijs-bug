import styles from './index.less';

export default function IndexPage() {
  return (
    <div className={styles.page}>
      <h3>标题1</h3>
      <h3>标题2</h3>
      <h3>标题3</h3>
      <h3>标题4</h3>
      <h3>标题5</h3>
      <input type="text" placeholder="请输入文本"/>
    </div>
  );
}
