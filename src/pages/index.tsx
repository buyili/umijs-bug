import styles from './index.less';
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
        <Cell href="/react-weui-import-error/error-page" access>
          <CellBody>react-weui import error</CellBody>
          <CellFooter />
        </Cell>
        <Cell href="/react-weui-import-error/fix-page" access>
          <CellBody>react-weui import error (fixed)</CellBody>
          <CellFooter />
        </Cell>
        <Cell href="/fix-keyboard-whitespace">
          <CellBody>keyboard whitespace error</CellBody>
          <CellFooter />
        </Cell>
      </Cells>
    </div>
  );
}
