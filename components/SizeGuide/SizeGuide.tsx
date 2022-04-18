import classes from './SizeGuide.module.scss';
import { useState } from 'react';
import { Modal, Tabs, Table } from 'antd';

const SizeGuide = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const { TabPane } = Tabs;

    const handleModal = () => {
        setModalVisible(!modalVisible)
    }

    const inchesData = [
        {
            key: '1',
            size: 'XS',
            chest: '32-35',
            waist: '26-28',
            length: '26.5'
        },
        {
            key: '2',
            size: 'S',
            chest: '35-38',
            waist: '27-30',
            length: '27'
        },
        {
            key: '3',
            size: 'M',
            chest: '38-41',
            waist: '30-33',
            length: '27.5'
        },
        {
            key: '4',
            size: 'L',
            chest: '41-44',
            waist: '33-36',
            length: '28'
        },
        {
            key: '5',
            size: 'XL',
            chest: '44-47',
            waist: '36-39',
            length: '28.5'
        },
    ];
    const cmData = [
        {
            key: '1',
            size: 'XS',
            chest: '81-89',
            waist: '66-71',
            length: '67'
        },
        {
            key: '2',
            size: 'S',
            chest: '89-97',
            waist: '69-76',
            length: '69'
        },
        {
            key: '3',
            size: 'M',
            chest: '97-104',
            waist: '76-84',
            length: '70'
        },
        {
            key: '4',
            size: 'L',
            chest: '104-112',
            waist: '84-91',
            length: '71'
        },
        {
            key: '5',
            size: 'XL',
            chest: '112-120',
            waist: '91-99',
            length: '72'
        },
    ];

    const columns = [
        {
            title: '',
            dataIndex: 'size',
            key: 'size',
        },
        {
            title: 'Chest',
            dataIndex: 'chest',
            key: 'chest',
        },
        {
            title: 'Waist',
            dataIndex: 'waist',
            key: 'waist',
        },
        {
            title: 'Length',
            dataIndex: 'length',
            key: 'length',
        },
    ];

    return (
        <>
            <button className={classes.button} onClick={handleModal}>
                Size Guide
            </button>

            <Modal
                visible={modalVisible}
                footer={null}
                onCancel={handleModal}
            >
                <Tabs defaultActiveKey="1" >
                    <TabPane tab="IN" key="1">
                        <Table dataSource={inchesData} columns={columns} pagination={false}/>
                        <br/>
                        <span>
                            THE SIZE MAY DIFFER BY 1-2IN DEPENDING ON MEASUREMENT METHODS
                        </span>
                    </TabPane>
                    <TabPane tab="CM" key="2">
                        <Table dataSource={cmData} columns={columns} pagination={false}/>
                        <span>
                        THE SIZE MAY DIFFER BY 2-4CM DEPENDING ON MEASUREMENT METHODS
                        </span>
                    </TabPane>
                </Tabs>
            </Modal>
        </>
    )
}

export default SizeGuide;