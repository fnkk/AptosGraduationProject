'use client'
import { Layout, Row, Col, Button,} from "antd";
import { WalletSelector } from "@aptos-labs/wallet-adapter-ant-design";
import "@aptos-labs/wallet-adapter-ant-design/dist/index.css";
function Navbar() {
    return (
        <>
            <Layout>
                <Row align="middle">
                    <Col span={2} offset={1}>
                        <Button type="text" className="text-[18px] font-bold">
                            My todolist
                        </Button>

                    </Col>
                    <Col span={8} offset={1}>
                        <Button type="text" className="text-[18px] font-bold">
                            My collections
                        </Button>
                    </Col>
                    <Col span={12} style={{ textAlign: "right", paddingRight: "200px" }}>
                        <WalletSelector />
                    </Col>
                </Row>
            </Layout>
        </>
    )
}
export default Navbar;