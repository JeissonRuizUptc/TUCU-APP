
/*==============================================================*/
/* Table: AFILIATE                                              */
/*==============================================================*/
create  table AFILIATE 
(
   AFFILIATE_ID         integer                        not null,
   USER_ID              integer                        not null,
   constraint PK_AFILIATE primary key clustered (AFFILIATE_ID)
);

/*==============================================================*/
/* Index: AFILIATE_PK                                           */
/*==============================================================*/
create unique  index AFILIATE_PK on AFILIATE (
AFFILIATE_ID ASC
);

/*==============================================================*/
/* Index: RELATIONSHIP_4_FK                                     */
/*==============================================================*/
create index RELATIONSHIP_4_FK on AFILIATE (
USER_ID ASC
);

/*==============================================================*/
/* Table: CITY                                                  */
/*==============================================================*/
create  table CITY 
(
   CITY_ID              integer                        not null,
   DEPARTAMENT_ID       integer                        not null,
   COUNTRY_ID           integer                        not null,
   CITY                 varchar(45)                    not null,
   LATITUDE_CITY        varchar(45)                    not null,
   LONGITUDE_CITY       varchar(45)                    not null,
   ENABLED_CITY         integer                        not null,
   constraint PK_CITY primary key clustered (CITY_ID)
);

/*==============================================================*/
/* Index: CITY_PK                                               */
/*==============================================================*/
create unique  index CITY_PK on CITY (
CITY_ID ASC
);

/*==============================================================*/
/* Index: RELATIONSHIP_8_FK                                     */
/*==============================================================*/
create index RELATIONSHIP_8_FK on CITY (
DEPARTAMENT_ID ASC
);

/*==============================================================*/
/* Index: RELATIONSHIP_9_FK                                     */
/*==============================================================*/
create index RELATIONSHIP_9_FK on CITY (
COUNTRY_ID ASC
);

/*==============================================================*/
/* Table: COUNTRY                                               */
/*==============================================================*/
create  table COUNTRY 
(
   COUNTRY_ID           integer                        not null,
   COUNTRY              varchar(45)                    not null,
   constraint PK_COUNTRY primary key clustered (COUNTRY_ID)
);

/*==============================================================*/
/* Index: COUNTRY_PK                                            */
/*==============================================================*/
create unique  index COUNTRY_PK on COUNTRY (
COUNTRY_ID ASC
);

/*==============================================================*/
/* Table: DELIVERY_MEN                                          */
/*==============================================================*/
create  table DELIVERY_MEN 
(
   DELIVERY_MAN_ID      integer                        not null,
   USER_ID              integer                        not null,
   constraint PK_DELIVERY_MEN primary key clustered (DELIVERY_MAN_ID)
);

/*==============================================================*/
/* Index: DELIVERY_MEN_PK                                       */
/*==============================================================*/
create unique  index DELIVERY_MEN_PK on DELIVERY_MEN (
DELIVERY_MAN_ID ASC
);

/*==============================================================*/
/* Index: RELATIONSHIP_5_FK                                     */
/*==============================================================*/
create index RELATIONSHIP_5_FK on DELIVERY_MEN (
USER_ID ASC
);

/*==============================================================*/
/* Table: DEPARTAMENT                                           */
/*==============================================================*/
create  table DEPARTAMENT 
(
   DEPARTAMENT_ID       integer                        not null,
   DEPARTAMENT          varchar(45)                    not null,
   constraint PK_DEPARTAMENT primary key clustered (DEPARTAMENT_ID)
);

/*==============================================================*/
/* Index: DEPARTAMENT_PK                                        */
/*==============================================================*/
create unique  index DEPARTAMENT_PK on DEPARTAMENT (
DEPARTAMENT_ID ASC
);

/*==============================================================*/
/* Table: ESTORE                                                */
/*==============================================================*/
create  table ESTORE 
(
   AFFILIATE_ID         integer                        not null,
   STORE_ID             integer                        not null,
   constraint PK_ESTORE primary key clustered (AFFILIATE_ID, STORE_ID)
);

/*==============================================================*/
/* Index: ESTORE_PK                                             */
/*==============================================================*/
create unique  index ESTORE_PK on ESTORE (
AFFILIATE_ID ASC,
STORE_ID ASC
);

/*==============================================================*/
/* Index: RELATIONSHIP_3_FK                                     */
/*==============================================================*/
create index RELATIONSHIP_3_FK on ESTORE (
AFFILIATE_ID ASC
);

/*==============================================================*/
/* Table: MODULE                                                */
/*==============================================================*/
create  table MODULE 
(
   MODULE_ID            integer                        not null,
   MODULE               varchar(45)                    not null,
   constraint PK_MODULE primary key clustered (MODULE_ID)
);

/*==============================================================*/
/* Index: MODULE_PK                                             */
/*==============================================================*/
create unique  index MODULE_PK on MODULE (
MODULE_ID ASC
);

/*==============================================================*/
/* Table: ROLE                                                  */
/*==============================================================*/
create  table ROLE 
(
   ROLE_ID              integer                        not null,
   ROLE                 varchar(45)                    not null,
   constraint PK_ROLE primary key clustered (ROLE_ID)
);

/*==============================================================*/
/* Index: ROLE_PK                                               */
/*==============================================================*/
create unique  index ROLE_PK on ROLE (
ROLE_ID ASC
);

/*==============================================================*/
/* Table: ROLE_MODULE                                           */
/*==============================================================*/
create  table ROLE_MODULE 
(
   MODULE_ID            integer                        not null,
   ROLE_ID              integer                        not null,
   ROLE_MODULE_ID       integer                        not null,
   constraint PK_ROLE_MODULE primary key clustered (MODULE_ID, ROLE_ID)
);

/*==============================================================*/
/* Index: ROLE_MODULE_PK                                        */
/*==============================================================*/
create unique index ROLE_MODULE_PK on ROLE_MODULE (
MODULE_ID ASC,
ROLE_ID ASC,
ROLE_MODULE_ID ASC
);

/*==============================================================*/
/* Index: RELATIONSHIP_1_FK                                     */
/*==============================================================*/
create index RELATIONSHIP_1_FK on ROLE_MODULE (
ROLE_ID ASC
);

/*==============================================================*/
/* Index: RELATIONSHIP_2_FK                                     */
/*==============================================================*/
create index RELATIONSHIP_2_FK on ROLE_MODULE (
MODULE_ID ASC
);

/*==============================================================*/
/* Table: "USER"                                                */
/*==============================================================*/
create table USER 
(
   USER_ID              integer                        not null,
   ROLE_ID              integer                        not null,
   CITY_ID              integer                        not null,
   USER_NAME            varchar(45)                    not null,
   FIRST_NAME           varchar(45)                    not null,
   SURNAME              varchar(45)                    not null,
   PHON_NUMBER          integer                        not null,
   PASSWORD_USER        varchar(45)                    not null,
   TABLE_USER_ID        varchar(45)                    not null,
   ENABLED_USER         integer                        not null,
   constraint PK_USER primary key clustered (USER_ID)
);

/*==============================================================*/
/* Index: USER_PK                                               */
/*==============================================================*/
create unique  index USER_PK on USER (
USER_ID ASC
);


/*==============================================================*/
/* Index: RELATIONSHIP_6_FK                                     */
/*==============================================================*/
create index RELATIONSHIP_6_FK on USER (
ROLE_ID ASC
);

/*==============================================================*/
/* Index: RELATIONSHIP_7_FK                                     */
/*==============================================================*/
create index RELATIONSHIP_7_FK on USER (
CITY_ID ASC
);

alter table AFILIATE
   add constraint FK_AFILIATE_RELATIONS_USER foreign key (USER_ID)
      references USER (USER_ID)
      on update restrict
      on delete restrict;

alter table CITY
   add constraint FK_CITY_RELATIONS_DEPARTAM foreign key (DEPARTAMENT_ID)
      references DEPARTAMENT (DEPARTAMENT_ID)
      on update restrict
      on delete restrict;

alter table CITY
   add constraint FK_CITY_RELATIONS_COUNTRY foreign key (COUNTRY_ID)
      references COUNTRY (COUNTRY_ID)
      on update restrict
      on delete restrict;

alter table DELIVERY_MEN
   add constraint FK_DELIVERY_RELATIONS_USER foreign key (USER_ID)
      references USER (USER_ID)
      on update restrict
      on delete restrict;

alter table ESTORE
   add constraint FK_ESTORE_RELATIONS_AFILIATE foreign key (AFFILIATE_ID)
      references AFILIATE (AFFILIATE_ID)
      on update restrict
      on delete restrict;

alter table ROLE_MODULE
   add constraint FK_ROLE_MOD_RELATIONS_ROLE foreign key (ROLE_ID)
      references ROLE (ROLE_ID)
      on update restrict
      on delete restrict;

alter table ROLE_MODULE
   add constraint FK_ROLE_MOD_RELATIONS_MODULE foreign key (MODULE_ID)
      references MODULE (MODULE_ID)
      on update restrict
      on delete restrict;

alter table USER
   add constraint FK_USER_RELATIONS_ROLE foreign key (ROLE_ID)
      references ROLE (ROLE_ID)
      on update restrict
      on delete restrict;

alter table USER
   add constraint FK_USER_RELATIONS_CITY foreign key (CITY_ID)
      references CITY (CITY_ID)
      on update restrict
      on delete restrict;