import React, { useState } from "react";
import { Tab, Tabs, Table } from "react-bootstrap";

function ControlledTabs() {
  const [key, setKey] = useState("SPECIFICATIONS");

  return (
    <div className="container products prodcont">
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={k => setKey(k)}
      >
        <Tab eventKey="SPECIFICATIONS" title="SPECIFICATIONS">
          <div className="tabinside">
            <h5 className="mt-5 mb-5">SPECIFICATIONS</h5>
            <p className="mt-5 mb-5">
              <h5>Weights</h5>
              <Table responsive className="ml-5">
                <thead>
                  <tr>
                    <th>Aircraft</th>
                    <th>Total Weight</th>
                    <th>Track Length"</th>
                    <th>Track lbs</th>
                    <th>Motor</th>
                    <th>Battery</th>
                    <th>Trolley</th>
                    <th>Chair</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Heavy/Super</td>
                    <td>155 lbs</td>
                    <td>150”</td>
                    <td>56 lbs</td>
                    <td>49 lbs</td>
                    <td>19 lbs</td>
                    <td>12 lbs</td>
                    <td>19 lbs</td>
                  </tr>
                  <tr>
                    <td>Super-Mid</td>
                    <td>144 lbs</td>
                    <td>132”</td>
                    <td>45 lbs</td>
                    <td>49 lbs</td>
                    <td>19 lbs</td>
                    <td>12 lbs</td>
                    <td>19 lbs</td>
                  </tr>
                  <tr>
                    <td>Lights/Mid</td>
                    <td>134 lb</td>
                    <td>100”</td>
                    <td>35 lbs</td>
                    <td>49 lbs</td>
                    <td>19 lbs</td>
                    <td>12 lbs</td>
                    <td>19 lbs</td>
                  </tr>
                  <tr>
                    <td>BBJ</td>
                    <td>188 lbs</td>
                    <td>264”</td>
                    <td>89 lbs</td>
                    <td>49 lbs</td>
                    <td>19 lbs</td>
                    <td>12 lbs</td>
                    <td>19 lbs</td>
                  </tr>
                </tbody>
              </Table>
              <h5>Dimensions</h5>
              <Table responsive className="ml-5">
                <thead>
                  <tr>
                    <th>Aircraft</th>
                    <th>Track</th>
                    <th>Fold</th>
                    <th>Height</th>
                    <th>Width</th>
                    <th>Length</th>
                    <th>Weight</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Heavy</td>
                    <td>150”</td>
                    <td>Tri-Fold</td>
                    <td>12”</td>
                    <td>15”</td>
                    <td>51”</td>
                    <td>51 lbs</td>
                  </tr>
                  <tr>
                    <td>Mids</td>
                    <td>132”</td>
                    <td>Tri-Fold</td>
                    <td>12”</td>
                    <td>15”</td>
                    <td>45”</td>
                    <td>45 lbs</td>
                  </tr>
                  <tr>
                    <td>Lights</td>
                    <td>**100”</td>
                    <td>Bi-Fold</td>
                    <td>8”</td>
                    <td>15”</td>
                    <td>51”</td>
                    <td>35 lbs</td>
                  </tr>
                  <tr>
                    <td>BBJ</td>
                    <td>264”</td>
                    <td>4-Fold</td>
                    <td>16”</td>
                    <td>15”</td>
                    <td>68”</td>
                    <td>89 lbs</td>
                  </tr>
                </tbody>
              </Table>
            </p>
          </div>
        </Tab>
        <Tab eventKey="SHIPPING" title="SHIPPING">
          <div className="tabinside">
            <h5 className="mt-5 mb-5">SHIPPING</h5>
            <p className="mt-5 mb-5">
              <h5>Within Continental US</h5>
              <ul style={{ listStyle: "none" }}>
                <li> Flat Fee for US</li>
                <li>No charge for deliveries in South Fl</li>
              </ul>

              <h5>Delivery & Training Outside of Continental US: </h5>
              <ul style={{ listStyle: "none" }}>
                <li>Customer responsible for all shipping costs</li>
                <li>Export/Import Fees/taxes/bonds/fees </li>
              </ul>
            </p>
          </div>
        </Tab>
        <Tab eventKey="WARRANTY" title="WARRANTY">
          <div className="tabinside">
            <h5 className="mt-5 mb-5">WARRANTY</h5>
            <p className="mt-5 mb-5">
              <h5>Warranty / Parts</h5>
              <ul style={{ listStyle: "none" }}>
                <li>
                  2 year limited warranty on all normal wear and tear items
                </li>
              </ul>
            </p>
          </div>
        </Tab>
        {/* <Tab eventKey="PRICEANDTERMS" title="PRICE & TERMS">
          <h5 className="mt-5 mb-5">PRICE & TERMS</h5>
          <p className="mt-5 mb-5">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </Tab> */}
        <Tab eventKey="DELIVERYANDTRAINING" title="DELIVERY & TRAINING">
          <div className="tabinside">
            <h5 className="mt-5 mb-5">DELIVERY & TRAINING</h5>
            <p className="mt-5 mb-5">
              <h5>Delivery & On-Site Training </h5>
              <ul style={{ listStyle: "none" }}>
                <li>Free to domestic customers</li>
                <li>$500 Shipping cost</li>
                <li>Free on site training to domestic</li>
              </ul>
            </p>
          </div>
        </Tab>
      </Tabs>
    </div>
  );
}
export default ControlledTabs;
