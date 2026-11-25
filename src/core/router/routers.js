import { initSales } from "../../features/sales/index.js";
import { initUsers } from "../../features/users/index.js";
import { initTasks } from "../../features/tasks/index.js";

export const routers = {
  users: initUsers,
  tasks: initTasks,
  sales: initSales
}
  
