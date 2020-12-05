import React from 'react'
import Tabs from 'react-bootstrap/Tabs'

const BaseTab = (tabArray,tabId,tabClass) => {
    const [key, setKey] = useState('home');

    const tabsContent = tabArray.map((tabObject) =>
        tabItemMaker(tabObject)
    );

    const tabItemMaker = (tabObject) => {
        const Title = tabObject[0]
        const Content = tabObject[1]
        const EventKey = Title
        
        return(
            <Tab eventKey={EventKey} title={Title}>
                {Content}
            </Tab>
        )
    }

    return (
      <Tabs
        id={tabId}
        className={tabClass}
        activeKey={key}
        onSelect={(k) => setKey(k)}
      >
        {tabsContent}
      </Tabs>
    );
}

export default BaseTab;