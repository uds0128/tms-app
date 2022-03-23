import Router from "vue-router";
import Vue from "vue";

const Container = () => import('../components/containers/Container');
const Dashboard = () => import('../components/Dashboard');
const InwardQuality = () => import('../components/InwardQuality/InwardQualityContainer');
const SellQuality = () => import('../components/SellQuality/SellQualityContainer');
const Broker = () => import('../components/Broker/BrokerContainer');
const Customer = () => import('../components/Customer/CustomerContainer.vue');
const Vendor = () => import('../components/Vendor/VendorContainer');
const BankDetails = () => import('../components/BankDetails/BankDetailsContainer');
const Credit = () => import('../components/Credit/CreditContainer');
const ExpenseCategory = () => import('../components/Expense/ExpenseCategory/ExpenseCategoryContainer');
const ExpenseManagement = () => import("../components/Expense/ExpenseManagement/ExpenseManagementContainer");
const NewInward = () => import("../components/Inward/NewInward");
const NewChallan = () => import("../components/Challan/NewChallan");
const SMChallan = () => import("../components/Challan/SMChallan");
const ManageInward = () => import('../components/Inward/SMInward');
const GenerateDirectInvoice = () => import('../components/Invoice/GenerateDirectInvoice');
const ManageDirectInvoices = () => import('../components/Invoice/ManageDirectInvoice');
const GenerateFromChallan = () => import('../components/Invoice/GenerateFromChallan');
const ManageChallanInvoice = () => import('../components/Invoice/ManageChallanInvoice');
const HelloWorld = () => import('../components/HelloWorld');

Vue.use(Router);

export default new Router({
    mode: 'hash',
    linkActiveClass: 'active',
    scrollBehavior: () => ({ y: 0 }),
    routes: configRoutes()
})

function configRoutes() {
    return [
        {
            path: '/',
            redirect: "/dashboard",
            name: 'Home',
            component: Container,
            children: [
                {
                    path: "dashboard",
                    name: "Dashboard",
                    component: Dashboard
                },
                {
                    path: "inwardquality",
                    name: "InwardQuality",
                    component: InwardQuality
                },
                {
                    path: "sellquality",
                    name: "SellQuality",
                    component: SellQuality
                },
                {
                    path: "broker",
                    name: "Broker",
                    component: Broker
                },
                {
                    path: "customer",
                    name: "CustomerContainer",
                    component: Customer
                },
                {
                    path: "vendor",
                    name: "VendorContainer",
                    component: Vendor
                },
                {
                    path: "bankdetails",
                    name: "BankDetails",
                    component: BankDetails
                },
                {
                    path: "credit",
                    name: "Credit",
                    component: Credit
                },
                {
                    path: "expensecategory",
                    name: "Expense Category",
                    component: ExpenseCategory
                },
                {
                    path: "expensemanagement",
                    name: "Expense Management",
                    component: ExpenseManagement
                },
                {
                    path: "newinward",
                    name: "New Inward",
                    component: NewInward
                },
                {
                    path: "manageinward",
                    name: "ManageInward",
                    component: ManageInward
                },
                {
                    path: "newchallan",
                    name: "New Challan",
                    component: NewChallan
                },
                {
                    path: "smchallan",
                    name: "S & M Challan",
                    component: SMChallan
                },
                {
                    path: "newdirectinvoice",
                    name: "New Direct Invoice",
                    component: GenerateDirectInvoice
                },
                {
                    path: "managedirectinvoice",
                    name: "Manage Direct Invoices",
                    component: ManageDirectInvoices
                },
                {
                    path: "invoicefromchallan",
                    name: "GenerateFromChallan",
                    component: GenerateFromChallan
                },
                {
                    path: "managechallaninvoice",
                    name: "ManageChallanInvoice",
                    component: ManageChallanInvoice
                }
            ]
        }
    ]
}