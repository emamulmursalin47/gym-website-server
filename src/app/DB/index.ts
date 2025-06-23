import config from "../config";
import { USER_ROLE } from "../module/user/user.constant";
import { User } from "../module/user/user.model";

const superUser = {
  userId: "Super-001",
  email: config.super_admin_email,
  contactNumber: config.super_admin_contact_number,
  password: config.super_admin_password,
  needPasswordChange: false,
  role: USER_ROLE.SUPER_ADMIN,
  status: "ACTIVE",
  isDeleted: false,
};

const seedSuperAdmin = async () => {
  const isSuperAdminExist = await User.findOne({ role: USER_ROLE.SUPER_ADMIN });
  if (!isSuperAdminExist) {
    await User.create(superUser);
  }
};

export default seedSuperAdmin;
