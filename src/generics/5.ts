export const UserRole = {
  admin: "admin",
  editor: "editor",
  guest: "guest",
} as const;

export type UserRole = (typeof UserRole)[keyof typeof UserRole];
type UserRoleType = Record<UserRole, string>;

const RoleDescription: UserRoleType = {
  [UserRole.admin]: "Admin User",
  [UserRole.editor]: "Editor User",
  [UserRole.guest]: "Guest User",
};
