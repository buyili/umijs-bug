import styles from './index.less';
// @ts-ignore
import ReactWeui from 'react-weui';
const { Button } = ReactWeui;
const { Cells, CellsTitle, Cell, CellHeader, CellBody, CellFooter } = ReactWeui;
//import styles
import 'weui';
import 'react-weui/build/packages/react-weui.css';

export default function IndexPage() {
  return (
    <div className={styles.page}>
      <CellsTitle>List with link</CellsTitle>
      <Cells>
        <Cell href="/react-weui-import-error/error-page" access link>
          <CellBody>react-weui import error</CellBody>
          <CellFooter />
        </Cell>
        <Cell href="/react-weui-import-error/fix-page" access link>
          <CellBody>react-weui import error (fixed)</CellBody>
          <CellFooter />
        </Cell>
        <Cell href="/fix-keyboard-whitespace" access link>
          <CellBody>keyboard whitespace error</CellBody>
          <CellFooter />
        </Cell>
      </Cells>
    </div>
  );
}
