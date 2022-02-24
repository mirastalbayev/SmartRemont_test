import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import App from "./App";
import Expenses from "./components/routes/expenses/expenses";
import Invoices from "./components/routes/invoices/invoices";
import Invoice from "./components/routes/invoice";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="expenses" element={<Expenses />} />
        <Route path="invoices" element={<Invoices />}>
          <Route
            index
            element={
              <main style={{ padding: '1rem' }}>
                <p>Выберите счёт</p>
              </main>
            }
          />
          <Route path=":invoiceId" element={<Invoice />} />
        </Route>
        <Route
          path='*'
          element={
            <main style={{ padding: '1rem' }}>
              <p>Здесь ничего нет!</p>
            </main>
          }  
        />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
