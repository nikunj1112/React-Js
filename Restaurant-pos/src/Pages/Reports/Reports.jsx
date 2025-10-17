import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import DailySalesChart from "../../Components/Charts/sales/Sales"; // ✅ correct import
import IncomeGauge from "../../Components/Charts/Income/Income"; // ✅ correct import
import "./Reports.css";

export default function Reports() {
  return (
    <div className="reports-page container py-4">
      {/* ======= TOP METRIC CARDS ======= */}
      <Row className="g-4 mb-4">
        <Col md={3} sm={6}>
          <Card className="metric-card shadow-sm border-0">
            <Card.Body>
              <h6>Revenue</h6>
              <h4>💰 $2,047</h4>
              <p className="text-danger small">▼ 10%</p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} sm={6}>
          <Card className="metric-card shadow-sm border-0">
            <Card.Body>
              <h6>Orders</h6>
              <h4>🛒 356</h4>
              <p className="text-success small">▲ 20%</p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} sm={6}>
          <Card className="metric-card shadow-sm border-0">
            <Card.Body>
              <h6>Dine In</h6>
              <h4>🍽️ 220</h4>
              <p className="text-success small">▲ 13%</p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} sm={6}>
          <Card className="metric-card shadow-sm border-0">
            <Card.Body>
              <h6>Take Away</h6>
              <h4>🥡 135</h4>
              <p className="text-danger small">▼ 5%</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* ======= CHARTS SECTION ======= */}
      <Row className="align-items-center mb-5">
        <Col md={8}>
          <Card className="shadow-sm border-0 p-3">
            <h6 className="fw-bold mb-3">Sales Overview</h6>
            {/* ✅ shows daily/monthly/yearly toggle buttons */}
            <DailySalesChart />
          </Card>
        </Col>
        <Col md={4}>
          <Card className="shadow-sm border-0 p-3">
            <h6 className="fw-bold mb-3">Total Income</h6>
            <IncomeGauge value={200000} />
          </Card>
        </Col>
      </Row>

      {/* ======= BOTTOM SECTIONS ======= */}
      <Row className="g-4">
        <Col md={6}>
          <Card className="shadow-sm border-0 p-3">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h6 className="fw-bold">Trending Dishes</h6>
              <a href="#" className="small text-warning">View all →</a>
            </div>
            <ul className="list-unstyled mb-0">
              <li>🍕 American Favorite <span className="float-end text-muted">Order: 120</span></li>
              <li>🍗 Super Supreme <span className="float-end text-muted">Order: 90</span></li>
              <li>🍊 Orange Juice <span className="float-end text-muted">Order: 80</span></li>
              <li>🍄 Chicken Mushroom <span className="float-end text-muted">Order: 70</span></li>
            </ul>
          </Card>
        </Col>

        <Col md={6}>
          <Card className="shadow-sm border-0 p-3">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h6 className="fw-bold">Out of Stock</h6>
              <a href="#" className="small text-warning">View all →</a>
            </div>
            <ul className="list-unstyled mb-0">
              <li>🍕 American Favorite <span className="float-end text-muted">Available: tomorrow</span></li>
              <li>🍗 Super Supreme <span className="float-end text-muted">Available: 12:00pm</span></li>
              <li>🍊 Orange Juice <span className="float-end text-muted">Available: 3:30pm</span></li>
              <li>🍄 Chicken Mushroom <span className="float-end text-muted">Available: tomorrow</span></li>
            </ul>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
