<template>
    <aside class="main-sidebar sidebar-dark-primary elevation-4">
        <!-- Brand Logo -->
        <a href="/" class="brand-link">
            <!-- <img
                src="dist/img/SahajanandLogo.png"
                alt="Sahajanand Textiles Logo"
                class="brand-image img-circle elevation-3"
                style="opacity: 0.8"
            /> -->
            <span class="brand-text font-weight-light">Sahajanand Textile</span>
        </a>

        <!-- Sidebar -->
        <div class="sidebar">
            <!-- Sidebar Menu -->
            <nav class="mt-2">
                <ul
                    class="nav nav-pills nav-sidebar flex-column"
                    data-widget="treeview"
                    role="menu"
                    data-accordion="false"
                >
                    <li class="nav-item">
                        <router-link to="/dashboard" class="nav-link">
                            <img src="../../assets/icons/speed_icon.svg">&nbsp;
                            <p class="text-md">Dashboard</p>
                        </router-link>
                    </li>

                    <li class="nav-item">
                        <router-link to="/inwardquality" class="nav-link">
                            <img src="../../assets/icons/login_icon.svg" alt="">&nbsp;
                            <p class="text-md">Inward Quality</p>
                        </router-link>
                    </li>

                    <li class="nav-item">
                        <router-link to="/sellquality" class="nav-link">
                            <img src="../../assets/icons/picture_in_picture_icon.svg">&nbsp;
                            <p class="text-md">Sell Quality</p>
                        </router-link>
                    </li>

                    <li class="nav-item">
                        <router-link to="/vendor" class="nav-link">
                            <img src="../../assets/icons/account_circle_icon.svg">&nbsp;
                            <p class="text-md">Vendor</p>
                        </router-link>
                    </li>

                    <li class="nav-item">
                        <router-link to="/customer" class="nav-link">
                            <img src="../../assets/icons/account_circle_icon.svg">&nbsp;
                            <p class="text-md">Customer</p>
                        </router-link>
                    </li>

                    <li class="nav-item">
                        <router-link to="/broker" class="nav-link">
                            <img src="../../assets/icons/account_circle_icon.svg">&nbsp;
                            <p class="text-md">Broker</p>
                        </router-link>
                    </li>

                    <li class="nav-item">
                        <a href="#" class="nav-link">
                            <img src="../../assets/icons/expand_more_white_24dp.svg">&nbsp;
                            <p class="text-md">
                                Inward
                            </p>
                        </a>
                        <ul class="nav nav-treeview">
                            <li class="nav-item">
                                <router-link to="/newinward" class="nav-link">
                                    <img src="../../assets/icons/circle_black_24dp.svg">&nbsp;
                                    <p class="text-md">New Inward</p>
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link to="/manageinward" class="nav-link">
                                    <img src="../../assets/icons/circle_black_24dp.svg">&nbsp;
                                    <p class="text-md">Manage Inward</p>
                                </router-link>
                            </li>
                        </ul>
                    </li>

                    <li class="nav-item">
                        <a href="#" class="nav-link">
                            <img src="../../assets/icons/expand_more_white_24dp.svg">&nbsp;
                            <p class="text-md">
                                Challan
                            </p>
                        </a>
                        <ul class="nav nav-treeview">
                            <li class="nav-item">
                                <router-link to="/newchallan" class="nav-link">
                                    <img src="../../assets/icons/circle_black_24dp.svg">&nbsp;
                                    <p class="text-md">New Challan</p>
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link to="/smchallan" class="nav-link">
                                    <img src="../../assets/icons/circle_black_24dp.svg">&nbsp;
                                    <p class="text-md">Manage Challan</p>
                                </router-link>
                            </li>
                        </ul>
                    </li>

                    <li class="nav-item">
                        <a href="#" class="nav-link">
                            <img src="../../assets/icons/expand_more_white_24dp.svg">&nbsp;
                            <p class="text-md">
                                Invoice
                            </p>
                        </a>
                        <ul class="nav nav-treeview">
                            <li class="nav-item">
                                <router-link to="/newdirectinvoice" class="nav-link">
                                    <img src="../../assets/icons/circle_black_24dp.svg">&nbsp;
                                    <p class="text-md">
                                        Generate Direct Invoice
                                    </p>
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link to="/managedirectinvoice" class="nav-link">
                                    <img src="../../assets/icons/circle_black_24dp.svg">&nbsp;
                                    <p class="text-md">Manage Direct Invoice</p>
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link to="/invoicefromchallan" class="nav-link">
                                    <img src="../../assets/icons/circle_black_24dp.svg">&nbsp;
                                    <p class="text-md">Generate from Challan</p>
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link to="/managechallaninvoice" class="nav-link">
                                    <img src="../../assets/icons/circle_black_24dp.svg">&nbsp;
                                    <p class="text-md">Manage Challan Invoice</p>
                                </router-link>
                            </li>
                        </ul>
                    </li>

                    <li class="nav-item">
                        <router-link to="/bankdetails" class="nav-link">
                            <img src="../../assets/icons/bank_icon.svg">&nbsp;
                            <p>Bank Details</p>
                        </router-link>
                    </li>

                    <li class="nav-item">
                        <a href="#" class="nav-link">
                            <img src="../../assets/icons/expand_more_white_24dp.svg">&nbsp;
                            <p class="text-md">
                                Expense
                            </p>
                        </a>
                        <ul class="nav nav-treeview">
                            <li class="nav-item">
                                <router-link
                                    to="expensecategory"
                                    class="nav-link"
                                >
                                    <img src="../../assets/icons/circle_black_24dp.svg">&nbsp;
                                    <p>Expense Category</p>
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link
                                    to="/expensemanagement"
                                    class="nav-link"
                                >
                                    <img src="../../assets/icons/circle_black_24dp.svg">&nbsp;
                                    <p>Expense Management</p>
                                </router-link>
                            </li>
                        </ul>
                    </li>

                    <li class="nav-item">
                        <router-link to="/credit" class="nav-link">
                            <img src="../../assets/icons/currency_rupee_icon.svg">&nbsp;    
                            <p>Credit</p>
                        </router-link>
                    </li>
                </ul>
            </nav>
            <!-- /.sidebar-menu -->
        </div>
        <!-- /.sidebar -->
    </aside>
</template>

<script>
export default {
    name: "Sidebar"
};
</script>
