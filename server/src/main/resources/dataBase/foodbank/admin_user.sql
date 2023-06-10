create table admin_user
(
    user_name varchar(255) not null
        primary key,
    password  varchar(255) null,
    user_role varchar(255) null
);

