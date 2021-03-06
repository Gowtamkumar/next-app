PGDMP         (            
    y            hms     12.9 (Ubuntu 12.9-2.pgdg20.04+1)     14.1 (Ubuntu 14.1-2.pgdg20.04+1) X   ?           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            ?           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            ?           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            ?           1262    32769    hms    DATABASE     X   CREATE DATABASE hms WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'en_US.UTF-8';
    DROP DATABASE hms;
                postgres    false                        3079    133773 	   uuid-ossp 	   EXTENSION     ?   CREATE EXTENSION IF NOT EXISTS "uuid-ossp" WITH SCHEMA public;
    DROP EXTENSION "uuid-ossp";
                   false            ?           0    0    EXTENSION "uuid-ossp"    COMMENT     W   COMMENT ON EXTENSION "uuid-ossp" IS 'generate universally unique identifiers (UUIDs)';
                        false    2            +           1255    51075    my_table_insert() 	   PROCEDURE     t  CREATE PROCEDURE public.my_table_insert()
    LANGUAGE plpgsql
    AS $$
DECLARE
    new_code TEXT;
BEGIN

    LOOP
        new_code := LOWER(SUBSTRING(MD5(''||NOW()::TEXT||RANDOM()::TEXT) FOR 8));
        BEGIN
            INSERT INTO my_table (code) VALUES (new_code);
            EXIT;
        EXCEPTION WHEN unique_violation THEN

        END;
    END LOOP;

END;
$$;
 )   DROP PROCEDURE public.my_table_insert();
       public          postgres    false            ?            1259    51106    appointments    TABLE     d  CREATE TABLE public.appointments (
    id integer NOT NULL,
    patient_id integer,
    department_id integer,
    staff_id integer,
    schedule_id integer,
    date date,
    day integer,
    serial_no integer,
    problem character varying(255),
    is_active boolean,
    created_at timestamp with time zone,
    updated_at timestamp with time zone
);
     DROP TABLE public.appointments;
       public         heap    postgres    false            ?            1259    51104    appointments_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.appointments_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 *   DROP SEQUENCE public.appointments_id_seq;
       public          postgres    false    232            ?           0    0    appointments_id_seq    SEQUENCE OWNED BY     K   ALTER SEQUENCE public.appointments_id_seq OWNED BY public.appointments.id;
          public          postgres    false    231                       1259    100832    approve_leaves    TABLE     ?  CREATE TABLE public.approve_leaves (
    id integer NOT NULL,
    leave_type_id integer,
    type character varying(255),
    staff_id integer,
    apply_date date,
    from_date date,
    to_date date,
    status character varying(255),
    reason character varying(255),
    created_at timestamp with time zone,
    updated_at timestamp with time zone,
    note character varying
);
 "   DROP TABLE public.approve_leaves;
       public         heap    postgres    false                       1259    100830    approve_leaves_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.approve_leaves_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 ,   DROP SEQUENCE public.approve_leaves_id_seq;
       public          postgres    false    284            ?           0    0    approve_leaves_id_seq    SEQUENCE OWNED BY     O   ALTER SEQUENCE public.approve_leaves_id_seq OWNED BY public.approve_leaves.id;
          public          postgres    false    283            ?            1259    51329    bank_accounts    TABLE     ?  CREATE TABLE public.bank_accounts (
    id integer NOT NULL,
    date character varying(255),
    bank_id integer,
    brance_name character varying(255),
    balance numeric(15,2),
    ac_no character varying(255),
    ac_type character varying(255),
    ac_holder character varying(255),
    ac_holder_phone character varying(255),
    is_active boolean,
    created_at timestamp with time zone,
    updated_at timestamp with time zone
);
 !   DROP TABLE public.bank_accounts;
       public         heap    postgres    false            ?            1259    51327    bank_accounts_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.bank_accounts_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 +   DROP SEQUENCE public.bank_accounts_id_seq;
       public          postgres    false    248            ?           0    0    bank_accounts_id_seq    SEQUENCE OWNED BY     M   ALTER SEQUENCE public.bank_accounts_id_seq OWNED BY public.bank_accounts.id;
          public          postgres    false    247            ?            1259    51355    bank_transetions    TABLE       CREATE TABLE public.bank_transetions (
    id integer NOT NULL,
    date date,
    type character varying(255),
    bank_account_id integer,
    amount numeric(15,2),
    slip_no character varying(255),
    created_at timestamp with time zone,
    updated_at timestamp with time zone
);
 $   DROP TABLE public.bank_transetions;
       public         heap    postgres    false            ?            1259    51353    bank_transetions_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.bank_transetions_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 .   DROP SEQUENCE public.bank_transetions_id_seq;
       public          postgres    false    250            ?           0    0    bank_transetions_id_seq    SEQUENCE OWNED BY     S   ALTER SEQUENCE public.bank_transetions_id_seq OWNED BY public.bank_transetions.id;
          public          postgres    false    249            ?            1259    34558    banks    TABLE     ?   CREATE TABLE public.banks (
    id integer NOT NULL,
    name character varying(255),
    note character varying(255),
    is_active boolean,
    created_at timestamp with time zone,
    updated_at timestamp with time zone
);
    DROP TABLE public.banks;
       public         heap    postgres    false            ?            1259    34556    banks_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.banks_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.banks_id_seq;
       public          postgres    false    222            ?           0    0    banks_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.banks_id_seq OWNED BY public.banks.id;
          public          postgres    false    221            ?            1259    51114    beds    TABLE       CREATE TABLE public.beds (
    id integer NOT NULL,
    bed_no integer,
    note character varying(255),
    is_active boolean,
    created_at timestamp with time zone,
    updated_at timestamp with time zone,
    type character varying,
    cost integer,
    ward_id integer
);
    DROP TABLE public.beds;
       public         heap    postgres    false            ?            1259    51112    beds_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.beds_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 "   DROP SEQUENCE public.beds_id_seq;
       public          postgres    false    234            ?           0    0    beds_id_seq    SEQUENCE OWNED BY     ;   ALTER SEQUENCE public.beds_id_seq OWNED BY public.beds.id;
          public          postgres    false    233            
           1259    76151    birth_reports    TABLE     ?  CREATE TABLE public.birth_reports (
    id integer NOT NULL,
    name character varying(255),
    date date,
    birth_time timestamp with time zone,
    gender character varying(255),
    father_name character varying(255),
    mother_name character varying(255),
    nationality character varying(255),
    religion character varying(255),
    staff_id integer,
    address character varying(255),
    is_active boolean,
    created_at timestamp with time zone,
    updated_at timestamp with time zone
);
 !   DROP TABLE public.birth_reports;
       public         heap    postgres    false            	           1259    76149    birth_reports_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.birth_reports_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 +   DROP SEQUENCE public.birth_reports_id_seq;
       public          postgres    false    266            ?           0    0    birth_reports_id_seq    SEQUENCE OWNED BY     M   ALTER SEQUENCE public.birth_reports_id_seq OWNED BY public.birth_reports.id;
          public          postgres    false    265            ?            1259    34523 	   buildings    TABLE     ?   CREATE TABLE public.buildings (
    id integer NOT NULL,
    name character varying(255),
    note character varying(255),
    is_active boolean,
    created_at timestamp with time zone,
    updated_at timestamp with time zone
);
    DROP TABLE public.buildings;
       public         heap    postgres    false            ?            1259    34521    buildings_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.buildings_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 '   DROP SEQUENCE public.buildings_id_seq;
       public          postgres    false    220            ?           0    0    buildings_id_seq    SEQUENCE OWNED BY     E   ALTER SEQUENCE public.buildings_id_seq OWNED BY public.buildings.id;
          public          postgres    false    219            ?            1259    51180    case_studies    TABLE     ?   CREATE TABLE public.case_studies (
    id integer NOT NULL,
    department_id integer,
    case_study_question_id integer,
    is_active boolean,
    created_at timestamp with time zone,
    updated_at timestamp with time zone
);
     DROP TABLE public.case_studies;
       public         heap    postgres    false            ?            1259    51178    case_studies_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.case_studies_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 *   DROP SEQUENCE public.case_studies_id_seq;
       public          postgres    false    240            ?           0    0    case_studies_id_seq    SEQUENCE OWNED BY     K   ALTER SEQUENCE public.case_studies_id_seq OWNED BY public.case_studies.id;
          public          postgres    false    239            ?            1259    51169    case_study_questions    TABLE     ?   CREATE TABLE public.case_study_questions (
    id integer NOT NULL,
    name character varying(255),
    note character varying(255),
    is_active boolean,
    created_at timestamp with time zone,
    updated_at timestamp with time zone
);
 (   DROP TABLE public.case_study_questions;
       public         heap    postgres    false            ?            1259    51167    case_study_questions_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.case_study_questions_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 2   DROP SEQUENCE public.case_study_questions_id_seq;
       public          postgres    false    238            ?           0    0    case_study_questions_id_seq    SEQUENCE OWNED BY     [   ALTER SEQUENCE public.case_study_questions_id_seq OWNED BY public.case_study_questions.id;
          public          postgres    false    237            )           1259    133784    cats    TABLE     ?   CREATE TABLE public.cats (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    name character varying NOT NULL,
    age integer,
    des text,
    is_active character varying
);
    DROP TABLE public.cats;
       public         heap    postgres    false    2                       1259    76175    death_reports    TABLE     ?  CREATE TABLE public.death_reports (
    id integer NOT NULL,
    patient_id integer,
    staff_id integer,
    father_name character varying(255),
    date_of_death date,
    time_of_death timestamp with time zone,
    is_active boolean,
    created_at timestamp with time zone,
    updated_at timestamp with time zone,
    description character varying,
    title character varying
);
 !   DROP TABLE public.death_reports;
       public         heap    postgres    false                       1259    76173    death_reports_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.death_reports_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 +   DROP SEQUENCE public.death_reports_id_seq;
       public          postgres    false    268            ?           0    0    death_reports_id_seq    SEQUENCE OWNED BY     M   ALTER SEQUENCE public.death_reports_id_seq OWNED BY public.death_reports.id;
          public          postgres    false    267            ?            1259    33064    departments    TABLE     ?   CREATE TABLE public.departments (
    id integer NOT NULL,
    name character varying(255),
    description character varying(255),
    is_active boolean,
    created_at timestamp with time zone,
    updated_at timestamp with time zone
);
    DROP TABLE public.departments;
       public         heap    postgres    false            ?            1259    33062    departments_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.departments_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public.departments_id_seq;
       public          postgres    false    204            ?           0    0    departments_id_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE public.departments_id_seq OWNED BY public.departments.id;
          public          postgres    false    203            ?            1259    33075    designations    TABLE       CREATE TABLE public.designations (
    id integer NOT NULL,
    name character varying(255),
    type character varying(255),
    description character varying(255),
    is_active boolean,
    created_at timestamp with time zone,
    updated_at timestamp with time zone
);
     DROP TABLE public.designations;
       public         heap    postgres    false            ?            1259    33073    designations_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.designations_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 *   DROP SEQUENCE public.designations_id_seq;
       public          postgres    false    206            ?           0    0    designations_id_seq    SEQUENCE OWNED BY     K   ALTER SEQUENCE public.designations_id_seq OWNED BY public.designations.id;
          public          postgres    false    205            ?            1259    33086 	   documents    TABLE     Z  CREATE TABLE public.documents (
    id integer NOT NULL,
    name character varying(255),
    type character varying(255),
    staff_id character varying(255),
    patient_id character varying(255),
    description character varying(255),
    is_active boolean,
    created_at timestamp with time zone,
    updated_at timestamp with time zone
);
    DROP TABLE public.documents;
       public         heap    postgres    false            ?            1259    33084    documents_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.documents_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 '   DROP SEQUENCE public.documents_id_seq;
       public          postgres    false    208            ?           0    0    documents_id_seq    SEQUENCE OWNED BY     E   ALTER SEQUENCE public.documents_id_seq OWNED BY public.documents.id;
          public          postgres    false    207            $           1259    117279    expense_heads    TABLE     ?   CREATE TABLE public.expense_heads (
    id integer NOT NULL,
    name character varying(255),
    note character varying(255),
    created_at timestamp with time zone,
    updated_at timestamp with time zone
);
 !   DROP TABLE public.expense_heads;
       public         heap    postgres    false            #           1259    117277    expense_heads_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.expense_heads_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 +   DROP SEQUENCE public.expense_heads_id_seq;
       public          postgres    false    292            ?           0    0    expense_heads_id_seq    SEQUENCE OWNED BY     M   ALTER SEQUENCE public.expense_heads_id_seq OWNED BY public.expense_heads.id;
          public          postgres    false    291            &           1259    117301    expenses    TABLE       CREATE TABLE public.expenses (
    id integer NOT NULL,
    expense_head_id integer,
    amount numeric(15,2),
    name character varying(255),
    date date,
    note character varying(255),
    created_at timestamp with time zone,
    updated_at timestamp with time zone
);
    DROP TABLE public.expenses;
       public         heap    postgres    false            %           1259    117299    expense_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.expense_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public.expense_id_seq;
       public          postgres    false    294            ?           0    0    expense_id_seq    SEQUENCE OWNED BY     B   ALTER SEQUENCE public.expense_id_seq OWNED BY public.expenses.id;
          public          postgres    false    293            "           1259    117257    income_heads    TABLE     ?   CREATE TABLE public.income_heads (
    id integer NOT NULL,
    name character varying(255),
    note character varying(255),
    created_at timestamp with time zone,
    updated_at timestamp with time zone
);
     DROP TABLE public.income_heads;
       public         heap    postgres    false            !           1259    117255    income_heads_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.income_heads_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 *   DROP SEQUENCE public.income_heads_id_seq;
       public          postgres    false    290            ?           0    0    income_heads_id_seq    SEQUENCE OWNED BY     K   ALTER SEQUENCE public.income_heads_id_seq OWNED BY public.income_heads.id;
          public          postgres    false    289            (           1259    117312    incomes    TABLE       CREATE TABLE public.incomes (
    id integer NOT NULL,
    income_head_id integer,
    amount numeric(15,2),
    name character varying(255),
    date date,
    note character varying(255),
    created_at timestamp with time zone,
    updated_at timestamp with time zone
);
    DROP TABLE public.incomes;
       public         heap    postgres    false            '           1259    117310    incomes_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.incomes_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public.incomes_id_seq;
       public          postgres    false    296            ?           0    0    incomes_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public.incomes_id_seq OWNED BY public.incomes.id;
          public          postgres    false    295                       1259    84349    investigation_reports    TABLE     2  CREATE TABLE public.investigation_reports (
    id integer NOT NULL,
    patient_id integer,
    date date,
    staff_id integer,
    description character varying(255),
    is_active boolean,
    created_at timestamp with time zone,
    updated_at timestamp with time zone,
    title character varying
);
 )   DROP TABLE public.investigation_reports;
       public         heap    postgres    false                       1259    84347    investigation_reports_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.investigation_reports_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 3   DROP SEQUENCE public.investigation_reports_id_seq;
       public          postgres    false    270            ?           0    0    investigation_reports_id_seq    SEQUENCE OWNED BY     ]   ALTER SEQUENCE public.investigation_reports_id_seq OWNED BY public.investigation_reports.id;
          public          postgres    false    269                       1259    100817    leave_types    TABLE     ?   CREATE TABLE public.leave_types (
    id integer NOT NULL,
    name character varying(255),
    note character varying(255),
    is_active boolean,
    created_at timestamp with time zone,
    updated_at timestamp with time zone
);
    DROP TABLE public.leave_types;
       public         heap    postgres    false                       1259    100815    leave_types_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.leave_types_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public.leave_types_id_seq;
       public          postgres    false    282            ?           0    0    leave_types_id_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE public.leave_types_id_seq OWNED BY public.leave_types.id;
          public          postgres    false    281            ?            1259    33232    medicins    TABLE     -  CREATE TABLE public.medicins (
    id integer NOT NULL,
    code character varying(255),
    name character varying(255),
    room_id integer,
    cost integer,
    note character varying(255),
    is_active boolean,
    created_at timestamp with time zone,
    updated_at timestamp with time zone
);
    DROP TABLE public.medicins;
       public         heap    postgres    false            ?            1259    33230    medicins_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.medicins_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.medicins_id_seq;
       public          postgres    false    212            ?           0    0    medicins_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.medicins_id_seq OWNED BY public.medicins.id;
          public          postgres    false    211            ?            1259    51122    modules    TABLE     R  CREATE TABLE public.modules (
    id integer NOT NULL,
    name character varying(255),
    note character varying(255),
    add character varying(255),
    edit character varying(255),
    view character varying(255),
    delete character varying(255),
    created_at timestamp with time zone,
    updated_at timestamp with time zone
);
    DROP TABLE public.modules;
       public         heap    postgres    false            ?            1259    51120    modules_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.modules_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public.modules_id_seq;
       public          postgres    false    236            ?           0    0    modules_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public.modules_id_seq OWNED BY public.modules.id;
          public          postgres    false    235                       1259    76140    notice_boards    TABLE     =  CREATE TABLE public.notice_boards (
    id integer NOT NULL,
    title character varying(255),
    person_type character varying(255),
    start_date date,
    end_date date,
    description character varying,
    is_active boolean,
    created_at timestamp with time zone,
    updated_at timestamp with time zone
);
 !   DROP TABLE public.notice_boards;
       public         heap    postgres    false                       1259    76138    notice_boards_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.notice_boards_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 +   DROP SEQUENCE public.notice_boards_id_seq;
       public          postgres    false    264            ?           0    0    notice_boards_id_seq    SEQUENCE OWNED BY     M   ALTER SEQUENCE public.notice_boards_id_seq OWNED BY public.notice_boards.id;
          public          postgres    false    263                       1259    84357    operation_reports    TABLE     .  CREATE TABLE public.operation_reports (
    id integer NOT NULL,
    patient_id integer,
    date date,
    staff_id integer,
    description character varying(255),
    is_active boolean,
    created_at timestamp with time zone,
    updated_at timestamp with time zone,
    title character varying
);
 %   DROP TABLE public.operation_reports;
       public         heap    postgres    false                       1259    84355    oparation_reports_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.oparation_reports_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 /   DROP SEQUENCE public.oparation_reports_id_seq;
       public          postgres    false    272            ?           0    0    oparation_reports_id_seq    SEQUENCE OWNED BY     U   ALTER SEQUENCE public.oparation_reports_id_seq OWNED BY public.operation_reports.id;
          public          postgres    false    271            ?            1259    51440    package_services    TABLE     ?   CREATE TABLE public.package_services (
    id integer NOT NULL,
    package_id integer,
    service_id integer,
    qty integer,
    amount numeric(15,2),
    created_at timestamp with time zone,
    updated_at timestamp with time zone
);
 $   DROP TABLE public.package_services;
       public         heap    postgres    false            ?            1259    51438    package_services_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.package_services_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 .   DROP SEQUENCE public.package_services_id_seq;
       public          postgres    false    254            ?           0    0    package_services_id_seq    SEQUENCE OWNED BY     S   ALTER SEQUENCE public.package_services_id_seq OWNED BY public.package_services.id;
          public          postgres    false    253                        1259    51448    packages    TABLE     
  CREATE TABLE public.packages (
    id integer NOT NULL,
    name character varying(255),
    discount numeric(15,2),
    discount_type character varying(255),
    is_active boolean,
    created_at timestamp with time zone,
    updated_at timestamp with time zone
);
    DROP TABLE public.packages;
       public         heap    postgres    false            ?            1259    51446    packages_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.packages_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.packages_id_seq;
       public          postgres    false    256            ?           0    0    packages_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.packages_id_seq OWNED BY public.packages.id;
          public          postgres    false    255            ?            1259    51272    patient_case_studies    TABLE     .  CREATE TABLE public.patient_case_studies (
    id integer NOT NULL,
    patient_id integer,
    department_id integer,
    case_study_question_id integer,
    description character varying(255),
    is_active boolean,
    created_at timestamp with time zone,
    updated_at timestamp with time zone
);
 (   DROP TABLE public.patient_case_studies;
       public         heap    postgres    false            ?            1259    51270    patient_case_studies_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.patient_case_studies_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 2   DROP SEQUENCE public.patient_case_studies_id_seq;
       public          postgres    false    242            ?           0    0    patient_case_studies_id_seq    SEQUENCE OWNED BY     [   ALTER SEQUENCE public.patient_case_studies_id_seq OWNED BY public.patient_case_studies.id;
          public          postgres    false    241                       1259    84398    patient_registers    TABLE     n  CREATE TABLE public.patient_registers (
    id integer NOT NULL,
    patient_id integer,
    bed_id integer,
    package_id integer,
    service_id integer,
    start_date date,
    note character varying(255),
    is_active boolean,
    created_at timestamp with time zone,
    updated_at timestamp with time zone,
    bed_qty integer,
    department_id integer
);
 %   DROP TABLE public.patient_registers;
       public         heap    postgres    false                       1259    84396    patient_registers_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.patient_registers_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 /   DROP SEQUENCE public.patient_registers_id_seq;
       public          postgres    false    276            ?           0    0    patient_registers_id_seq    SEQUENCE OWNED BY     U   ALTER SEQUENCE public.patient_registers_id_seq OWNED BY public.patient_registers.id;
          public          postgres    false    275            ?            1259    51095    patients    TABLE     ?  CREATE TABLE public.patients (
    id integer NOT NULL,
    code character varying(255),
    type character varying(255),
    name character varying(255),
    email character varying(255),
    phone_no character varying(255),
    blood_type character varying(255),
    gender character varying(255),
    marital_status character varying(255),
    age character varying(255),
    dob character varying(255),
    nid character varying(255),
    nationality character varying(255),
    photo character varying(255),
    present_address character varying(255),
    permanent_address character varying(255),
    is_active boolean,
    created_at timestamp with time zone,
    updated_at timestamp with time zone,
    religion character varying(255)
);
    DROP TABLE public.patients;
       public         heap    postgres    false            ?            1259    51093    patients_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.patients_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.patients_id_seq;
       public          postgres    false    230            ?           0    0    patients_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.patients_id_seq OWNED BY public.patients.id;
          public          postgres    false    229                       1259    100851    payroll_allowances    TABLE     
  CREATE TABLE public.payroll_allowances (
    id integer NOT NULL,
    name character varying(255),
    amount numeric(15,2),
    type character varying(255),
    payroll_id integer,
    created_at timestamp with time zone,
    updated_at timestamp with time zone
);
 &   DROP TABLE public.payroll_allowances;
       public         heap    postgres    false                       1259    100849    payroll_allowances_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.payroll_allowances_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 0   DROP SEQUENCE public.payroll_allowances_id_seq;
       public          postgres    false    286            ?           0    0    payroll_allowances_id_seq    SEQUENCE OWNED BY     W   ALTER SEQUENCE public.payroll_allowances_id_seq OWNED BY public.payroll_allowances.id;
          public          postgres    false    285                        1259    100862    payrolls    TABLE     ?  CREATE TABLE public.payrolls (
    id integer NOT NULL,
    basic_salary numeric(15,2),
    earning numeric(15,2),
    deduction numeric(15,2),
    status character varying(255),
    staff_id integer,
    payment_date date,
    payment_mode character varying(255),
    month date,
    note character varying(255),
    created_at timestamp with time zone,
    updated_at timestamp with time zone
);
    DROP TABLE public.payrolls;
       public         heap    postgres    false                       1259    100860    payrolls_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.payrolls_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.payrolls_id_seq;
       public          postgres    false    288            ?           0    0    payrolls_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.payrolls_id_seq OWNED BY public.payrolls.id;
          public          postgres    false    287            ?            1259    33130    permissions    TABLE     `  CREATE TABLE public.permissions (
    id integer NOT NULL,
    role_id character varying(255),
    module_id character varying(255),
    add character varying(255),
    view character varying(255),
    update character varying(255),
    delete character varying(255),
    created_at timestamp with time zone,
    updated_at timestamp with time zone
);
    DROP TABLE public.permissions;
       public         heap    postgres    false            ?            1259    33128    permissions_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.permissions_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public.permissions_id_seq;
       public          postgres    false    210            ?           0    0    permissions_id_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE public.permissions_id_seq OWNED BY public.permissions.id;
          public          postgres    false    209                       1259    67869    prescription_medicins    TABLE     7  CREATE TABLE public.prescription_medicins (
    id integer NOT NULL,
    prescription_id integer,
    name character varying(255),
    qty integer,
    unit character varying(255),
    medicin_eat_roles character varying(255),
    created_at timestamp with time zone,
    updated_at timestamp with time zone
);
 )   DROP TABLE public.prescription_medicins;
       public         heap    postgres    false                       1259    67867    prescription_medicins_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.prescription_medicins_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 3   DROP SEQUENCE public.prescription_medicins_id_seq;
       public          postgres    false    262            ?           0    0    prescription_medicins_id_seq    SEQUENCE OWNED BY     ]   ALTER SEQUENCE public.prescription_medicins_id_seq OWNED BY public.prescription_medicins.id;
          public          postgres    false    261                       1259    67834    prescriptions    TABLE     ?   CREATE TABLE public.prescriptions (
    id integer NOT NULL,
    staff_id integer,
    patient_id integer,
    is_active boolean,
    created_at timestamp with time zone,
    updated_at timestamp with time zone
);
 !   DROP TABLE public.prescriptions;
       public         heap    postgres    false                       1259    67832    prescriptions_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.prescriptions_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 +   DROP SEQUENCE public.prescriptions_id_seq;
       public          postgres    false    258            ?           0    0    prescriptions_id_seq    SEQUENCE OWNED BY     M   ALTER SEQUENCE public.prescriptions_id_seq OWNED BY public.prescriptions.id;
          public          postgres    false    257                       1259    67861    prescriptions_tests    TABLE     ?   CREATE TABLE public.prescriptions_tests (
    id integer NOT NULL,
    prescription_id integer,
    name character varying(255),
    created_at timestamp with time zone,
    updated_at timestamp with time zone
);
 '   DROP TABLE public.prescriptions_tests;
       public         heap    postgres    false                       1259    67859    prescriptions_tests_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.prescriptions_tests_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 1   DROP SEQUENCE public.prescriptions_tests_id_seq;
       public          postgres    false    260            ?           0    0    prescriptions_tests_id_seq    SEQUENCE OWNED BY     Y   ALTER SEQUENCE public.prescriptions_tests_id_seq OWNED BY public.prescriptions_tests.id;
          public          postgres    false    259            ?            1259    34512    roles    TABLE     ?   CREATE TABLE public.roles (
    id integer NOT NULL,
    name character varying(255),
    note character varying(255),
    is_active boolean,
    created_at timestamp with time zone,
    updated_at timestamp with time zone,
    color character varying
);
    DROP TABLE public.roles;
       public         heap    postgres    false            ?            1259    34510    roles_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.roles_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.roles_id_seq;
       public          postgres    false    218            ?           0    0    roles_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.roles_id_seq OWNED BY public.roles.id;
          public          postgres    false    217            ?            1259    34662    rooms    TABLE     ?   CREATE TABLE public.rooms (
    id integer NOT NULL,
    name character varying(255),
    room_no integer,
    is_active boolean,
    created_at timestamp with time zone,
    updated_at timestamp with time zone
);
    DROP TABLE public.rooms;
       public         heap    postgres    false            ?            1259    34660    rooms_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.rooms_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.rooms_id_seq;
       public          postgres    false    224            ?           0    0    rooms_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.rooms_id_seq OWNED BY public.rooms.id;
          public          postgres    false    223                       1259    100796    salaries    TABLE     ?   CREATE TABLE public.salaries (
    id integer NOT NULL,
    staff_id integer,
    date date,
    type character varying(255),
    amount numeric(15,2),
    created_at timestamp with time zone,
    updated_at timestamp with time zone
);
    DROP TABLE public.salaries;
       public         heap    postgres    false                       1259    100794    salaries_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.salaries_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.salaries_id_seq;
       public          postgres    false    280            ?           0    0    salaries_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.salaries_id_seq OWNED BY public.salaries.id;
          public          postgres    false    279            ?            1259    42874 	   schedules    TABLE     ?  CREATE TABLE public.schedules (
    id integer NOT NULL,
    staff_id integer,
    day character varying(255),
    start_time timestamp with time zone,
    end_time timestamp with time zone,
    per_patient_time integer,
    max_patient integer,
    appointment_type character varying(255),
    is_active boolean,
    created_at timestamp with time zone,
    updated_at timestamp with time zone
);
    DROP TABLE public.schedules;
       public         heap    postgres    false            ?            1259    42872    schedules_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.schedules_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 '   DROP SEQUENCE public.schedules_id_seq;
       public          postgres    false    226            ?           0    0    schedules_id_seq    SEQUENCE OWNED BY     E   ALTER SEQUENCE public.schedules_id_seq OWNED BY public.schedules.id;
          public          postgres    false    225            ?            1259    51387    services    TABLE     ?   CREATE TABLE public.services (
    id integer NOT NULL,
    name character varying(255),
    amount numeric(15,2),
    is_active boolean,
    created_at timestamp with time zone,
    updated_at timestamp with time zone,
    note character varying(255)
);
    DROP TABLE public.services;
       public         heap    postgres    false            ?            1259    51385    services_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.services_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.services_id_seq;
       public          postgres    false    252                        0    0    services_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.services_id_seq OWNED BY public.services.id;
          public          postgres    false    251                       1259    84423    staff_attendances    TABLE     ?   CREATE TABLE public.staff_attendances (
    id integer NOT NULL,
    staff_id integer,
    date date,
    note character varying(255),
    status character varying(255),
    created_at timestamp with time zone,
    updated_at timestamp with time zone
);
 %   DROP TABLE public.staff_attendances;
       public         heap    postgres    false                       1259    84421    staff_attendance_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.staff_attendance_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 .   DROP SEQUENCE public.staff_attendance_id_seq;
       public          postgres    false    278                       0    0    staff_attendance_id_seq    SEQUENCE OWNED BY     T   ALTER SEQUENCE public.staff_attendance_id_seq OWNED BY public.staff_attendances.id;
          public          postgres    false    277            ?            1259    34489    staffs    TABLE     K  CREATE TABLE public.staffs (
    id integer NOT NULL,
    code character varying(255),
    name character varying(255),
    email character varying(255),
    phone_no character varying(255),
    nid character varying(255),
    nationality character varying(255),
    present_address character varying(255),
    permanent_address character varying(255),
    specialist character varying(255),
    designation_id integer,
    department_id integer,
    bio character varying(255),
    dob character varying(255),
    gender character varying(255),
    marital_status character varying(255),
    blood_type character varying(255),
    education character varying(255),
    photo character varying(255),
    signature character varying(255),
    religion character varying(255),
    experience character varying(255),
    leaving_reason character varying(255),
    facebook_url character varying(255),
    instagram_url character varying(255),
    twitter_url character varying(255),
    linkedin_url character varying(255),
    bank_name character varying(255),
    branch_name character varying(255),
    ac_name character varying(255),
    ac_no character varying(255),
    note character varying(255),
    is_active boolean,
    created_at timestamp with time zone,
    updated_at timestamp with time zone,
    joining_date date,
    leaving_date date
);
    DROP TABLE public.staffs;
       public         heap    postgres    false            ?            1259    34487    staffs_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.staffs_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 $   DROP SEQUENCE public.staffs_id_seq;
       public          postgres    false    216                       0    0    staffs_id_seq    SEQUENCE OWNED BY     ?   ALTER SEQUENCE public.staffs_id_seq OWNED BY public.staffs.id;
          public          postgres    false    215            ?            1259    51085    teams    TABLE     W   CREATE TABLE public.teams (
    id integer NOT NULL,
    name character varying(90)
);
    DROP TABLE public.teams;
       public         heap    postgres    false            ?            1259    51083    teams_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.teams_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.teams_id_seq;
       public          postgres    false    228                       0    0    teams_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.teams_id_seq OWNED BY public.teams.id;
          public          postgres    false    227            ?            1259    33243    tests    TABLE     R  CREATE TABLE public.tests (
    id integer NOT NULL,
    code character varying(255),
    name character varying(255),
    building_id integer,
    room_id integer,
    cost character varying(255),
    note character varying(255),
    is_active boolean,
    created_at timestamp with time zone,
    updated_at timestamp with time zone
);
    DROP TABLE public.tests;
       public         heap    postgres    false            ?            1259    33241    tests_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.tests_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.tests_id_seq;
       public          postgres    false    214                       0    0    tests_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.tests_id_seq OWNED BY public.tests.id;
          public          postgres    false    213            ?            1259    51315 
   user_roles    TABLE     ?   CREATE TABLE public.user_roles (
    id integer NOT NULL,
    user_id integer,
    role_id integer,
    created_at timestamp with time zone,
    updated_at timestamp with time zone
);
    DROP TABLE public.user_roles;
       public         heap    postgres    false            ?            1259    51313    user_roles_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.user_roles_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public.user_roles_id_seq;
       public          postgres    false    246                       0    0    user_roles_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public.user_roles_id_seq OWNED BY public.user_roles.id;
          public          postgres    false    245            ?            1259    51292    users    TABLE     U  CREATE TABLE public.users (
    id integer NOT NULL,
    username character varying(255),
    password character varying(255),
    user_type character varying(255),
    staff_id integer,
    patient_id integer,
    member_id integer,
    is_active boolean,
    created_at timestamp with time zone,
    updated_at timestamp with time zone
);
    DROP TABLE public.users;
       public         heap    postgres    false            ?            1259    51290    users_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.users_id_seq;
       public          postgres    false    244                       0    0    users_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;
          public          postgres    false    243            *           1259    133795    userss    TABLE       CREATE TABLE public.userss (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    username character varying NOT NULL,
    password character varying NOT NULL,
    status character varying DEFAULT 'active'::character varying NOT NULL,
    roles text
);
    DROP TABLE public.userss;
       public         heap    postgres    false    2                       1259    84376    wards    TABLE     ?   CREATE TABLE public.wards (
    id integer NOT NULL,
    name character varying(255),
    note character varying(255),
    is_active boolean,
    created_at timestamp with time zone,
    updated_at timestamp with time zone,
    department_id integer
);
    DROP TABLE public.wards;
       public         heap    postgres    false                       1259    84374    wards_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.wards_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.wards_id_seq;
       public          postgres    false    274                       0    0    wards_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.wards_id_seq OWNED BY public.wards.id;
          public          postgres    false    273            j           2604    51211    appointments id    DEFAULT     r   ALTER TABLE ONLY public.appointments ALTER COLUMN id SET DEFAULT nextval('public.appointments_id_seq'::regclass);
 >   ALTER TABLE public.appointments ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    231    232    232            ?           2604    100835    approve_leaves id    DEFAULT     v   ALTER TABLE ONLY public.approve_leaves ALTER COLUMN id SET DEFAULT nextval('public.approve_leaves_id_seq'::regclass);
 @   ALTER TABLE public.approve_leaves ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    284    283    284            r           2604    51332    bank_accounts id    DEFAULT     t   ALTER TABLE ONLY public.bank_accounts ALTER COLUMN id SET DEFAULT nextval('public.bank_accounts_id_seq'::regclass);
 ?   ALTER TABLE public.bank_accounts ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    247    248    248            s           2604    51358    bank_transetions id    DEFAULT     z   ALTER TABLE ONLY public.bank_transetions ALTER COLUMN id SET DEFAULT nextval('public.bank_transetions_id_seq'::regclass);
 B   ALTER TABLE public.bank_transetions ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    250    249    250            e           2604    51212    banks id    DEFAULT     d   ALTER TABLE ONLY public.banks ALTER COLUMN id SET DEFAULT nextval('public.banks_id_seq'::regclass);
 7   ALTER TABLE public.banks ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    221    222    222            k           2604    51214    beds id    DEFAULT     b   ALTER TABLE ONLY public.beds ALTER COLUMN id SET DEFAULT nextval('public.beds_id_seq'::regclass);
 6   ALTER TABLE public.beds ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    233    234    234            {           2604    76154    birth_reports id    DEFAULT     t   ALTER TABLE ONLY public.birth_reports ALTER COLUMN id SET DEFAULT nextval('public.birth_reports_id_seq'::regclass);
 ?   ALTER TABLE public.birth_reports ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    266    265    266            d           2604    51215    buildings id    DEFAULT     l   ALTER TABLE ONLY public.buildings ALTER COLUMN id SET DEFAULT nextval('public.buildings_id_seq'::regclass);
 ;   ALTER TABLE public.buildings ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    219    220    220            n           2604    51216    case_studies id    DEFAULT     r   ALTER TABLE ONLY public.case_studies ALTER COLUMN id SET DEFAULT nextval('public.case_studies_id_seq'::regclass);
 >   ALTER TABLE public.case_studies ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    240    239    240            m           2604    51172    case_study_questions id    DEFAULT     ?   ALTER TABLE ONLY public.case_study_questions ALTER COLUMN id SET DEFAULT nextval('public.case_study_questions_id_seq'::regclass);
 F   ALTER TABLE public.case_study_questions ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    237    238    238            |           2604    76178    death_reports id    DEFAULT     t   ALTER TABLE ONLY public.death_reports ALTER COLUMN id SET DEFAULT nextval('public.death_reports_id_seq'::regclass);
 ?   ALTER TABLE public.death_reports ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    267    268    268            \           2604    51218    departments id    DEFAULT     p   ALTER TABLE ONLY public.departments ALTER COLUMN id SET DEFAULT nextval('public.departments_id_seq'::regclass);
 =   ALTER TABLE public.departments ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    204    203    204            ]           2604    51219    designations id    DEFAULT     r   ALTER TABLE ONLY public.designations ALTER COLUMN id SET DEFAULT nextval('public.designations_id_seq'::regclass);
 >   ALTER TABLE public.designations ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    206    205    206            ^           2604    51220    documents id    DEFAULT     l   ALTER TABLE ONLY public.documents ALTER COLUMN id SET DEFAULT nextval('public.documents_id_seq'::regclass);
 ;   ALTER TABLE public.documents ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    208    207    208            ?           2604    117282    expense_heads id    DEFAULT     t   ALTER TABLE ONLY public.expense_heads ALTER COLUMN id SET DEFAULT nextval('public.expense_heads_id_seq'::regclass);
 ?   ALTER TABLE public.expense_heads ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    292    291    292            ?           2604    117304    expenses id    DEFAULT     i   ALTER TABLE ONLY public.expenses ALTER COLUMN id SET DEFAULT nextval('public.expense_id_seq'::regclass);
 :   ALTER TABLE public.expenses ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    294    293    294            ?           2604    117260    income_heads id    DEFAULT     r   ALTER TABLE ONLY public.income_heads ALTER COLUMN id SET DEFAULT nextval('public.income_heads_id_seq'::regclass);
 >   ALTER TABLE public.income_heads ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    290    289    290            ?           2604    117315 
   incomes id    DEFAULT     h   ALTER TABLE ONLY public.incomes ALTER COLUMN id SET DEFAULT nextval('public.incomes_id_seq'::regclass);
 9   ALTER TABLE public.incomes ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    295    296    296            }           2604    84352    investigation_reports id    DEFAULT     ?   ALTER TABLE ONLY public.investigation_reports ALTER COLUMN id SET DEFAULT nextval('public.investigation_reports_id_seq'::regclass);
 G   ALTER TABLE public.investigation_reports ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    269    270    270            ?           2604    100820    leave_types id    DEFAULT     p   ALTER TABLE ONLY public.leave_types ALTER COLUMN id SET DEFAULT nextval('public.leave_types_id_seq'::regclass);
 =   ALTER TABLE public.leave_types ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    282    281    282            `           2604    51221    medicins id    DEFAULT     j   ALTER TABLE ONLY public.medicins ALTER COLUMN id SET DEFAULT nextval('public.medicins_id_seq'::regclass);
 :   ALTER TABLE public.medicins ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    212    211    212            l           2604    51222 
   modules id    DEFAULT     h   ALTER TABLE ONLY public.modules ALTER COLUMN id SET DEFAULT nextval('public.modules_id_seq'::regclass);
 9   ALTER TABLE public.modules ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    236    235    236            z           2604    76143    notice_boards id    DEFAULT     t   ALTER TABLE ONLY public.notice_boards ALTER COLUMN id SET DEFAULT nextval('public.notice_boards_id_seq'::regclass);
 ?   ALTER TABLE public.notice_boards ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    264    263    264            ~           2604    84360    operation_reports id    DEFAULT     |   ALTER TABLE ONLY public.operation_reports ALTER COLUMN id SET DEFAULT nextval('public.oparation_reports_id_seq'::regclass);
 C   ALTER TABLE public.operation_reports ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    271    272    272            u           2604    51443    package_services id    DEFAULT     z   ALTER TABLE ONLY public.package_services ALTER COLUMN id SET DEFAULT nextval('public.package_services_id_seq'::regclass);
 B   ALTER TABLE public.package_services ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    254    253    254            v           2604    51451    packages id    DEFAULT     j   ALTER TABLE ONLY public.packages ALTER COLUMN id SET DEFAULT nextval('public.packages_id_seq'::regclass);
 :   ALTER TABLE public.packages ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    256    255    256            o           2604    51275    patient_case_studies id    DEFAULT     ?   ALTER TABLE ONLY public.patient_case_studies ALTER COLUMN id SET DEFAULT nextval('public.patient_case_studies_id_seq'::regclass);
 F   ALTER TABLE public.patient_case_studies ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    241    242    242            ?           2604    84401    patient_registers id    DEFAULT     |   ALTER TABLE ONLY public.patient_registers ALTER COLUMN id SET DEFAULT nextval('public.patient_registers_id_seq'::regclass);
 C   ALTER TABLE public.patient_registers ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    275    276    276            i           2604    51224    patients id    DEFAULT     j   ALTER TABLE ONLY public.patients ALTER COLUMN id SET DEFAULT nextval('public.patients_id_seq'::regclass);
 :   ALTER TABLE public.patients ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    230    229    230            ?           2604    100854    payroll_allowances id    DEFAULT     ~   ALTER TABLE ONLY public.payroll_allowances ALTER COLUMN id SET DEFAULT nextval('public.payroll_allowances_id_seq'::regclass);
 D   ALTER TABLE public.payroll_allowances ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    286    285    286            ?           2604    100865    payrolls id    DEFAULT     j   ALTER TABLE ONLY public.payrolls ALTER COLUMN id SET DEFAULT nextval('public.payrolls_id_seq'::regclass);
 :   ALTER TABLE public.payrolls ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    288    287    288            _           2604    51225    permissions id    DEFAULT     p   ALTER TABLE ONLY public.permissions ALTER COLUMN id SET DEFAULT nextval('public.permissions_id_seq'::regclass);
 =   ALTER TABLE public.permissions ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    210    209    210            y           2604    67872    prescription_medicins id    DEFAULT     ?   ALTER TABLE ONLY public.prescription_medicins ALTER COLUMN id SET DEFAULT nextval('public.prescription_medicins_id_seq'::regclass);
 G   ALTER TABLE public.prescription_medicins ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    262    261    262            w           2604    67837    prescriptions id    DEFAULT     t   ALTER TABLE ONLY public.prescriptions ALTER COLUMN id SET DEFAULT nextval('public.prescriptions_id_seq'::regclass);
 ?   ALTER TABLE public.prescriptions ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    258    257    258            x           2604    67864    prescriptions_tests id    DEFAULT     ?   ALTER TABLE ONLY public.prescriptions_tests ALTER COLUMN id SET DEFAULT nextval('public.prescriptions_tests_id_seq'::regclass);
 E   ALTER TABLE public.prescriptions_tests ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    259    260    260            c           2604    51228    roles id    DEFAULT     d   ALTER TABLE ONLY public.roles ALTER COLUMN id SET DEFAULT nextval('public.roles_id_seq'::regclass);
 7   ALTER TABLE public.roles ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    218    217    218            f           2604    51229    rooms id    DEFAULT     d   ALTER TABLE ONLY public.rooms ALTER COLUMN id SET DEFAULT nextval('public.rooms_id_seq'::regclass);
 7   ALTER TABLE public.rooms ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    224    223    224            ?           2604    100799    salaries id    DEFAULT     j   ALTER TABLE ONLY public.salaries ALTER COLUMN id SET DEFAULT nextval('public.salaries_id_seq'::regclass);
 :   ALTER TABLE public.salaries ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    280    279    280            g           2604    51230    schedules id    DEFAULT     l   ALTER TABLE ONLY public.schedules ALTER COLUMN id SET DEFAULT nextval('public.schedules_id_seq'::regclass);
 ;   ALTER TABLE public.schedules ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    226    225    226            t           2604    51390    services id    DEFAULT     j   ALTER TABLE ONLY public.services ALTER COLUMN id SET DEFAULT nextval('public.services_id_seq'::regclass);
 :   ALTER TABLE public.services ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    251    252    252            ?           2604    84426    staff_attendances id    DEFAULT     {   ALTER TABLE ONLY public.staff_attendances ALTER COLUMN id SET DEFAULT nextval('public.staff_attendance_id_seq'::regclass);
 C   ALTER TABLE public.staff_attendances ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    277    278    278            b           2604    51231 	   staffs id    DEFAULT     f   ALTER TABLE ONLY public.staffs ALTER COLUMN id SET DEFAULT nextval('public.staffs_id_seq'::regclass);
 8   ALTER TABLE public.staffs ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    216    215    216            h           2604    51232    teams id    DEFAULT     d   ALTER TABLE ONLY public.teams ALTER COLUMN id SET DEFAULT nextval('public.teams_id_seq'::regclass);
 7   ALTER TABLE public.teams ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    228    227    228            a           2604    51233    tests id    DEFAULT     d   ALTER TABLE ONLY public.tests ALTER COLUMN id SET DEFAULT nextval('public.tests_id_seq'::regclass);
 7   ALTER TABLE public.tests ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    214    213    214            q           2604    51318    user_roles id    DEFAULT     n   ALTER TABLE ONLY public.user_roles ALTER COLUMN id SET DEFAULT nextval('public.user_roles_id_seq'::regclass);
 <   ALTER TABLE public.user_roles ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    245    246    246            p           2604    51295    users id    DEFAULT     d   ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);
 7   ALTER TABLE public.users ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    243    244    244                       2604    84379    wards id    DEFAULT     d   ALTER TABLE ONLY public.wards ALTER COLUMN id SET DEFAULT nextval('public.wards_id_seq'::regclass);
 7   ALTER TABLE public.wards ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    274    273    274            ?          0    51106    appointments 
   TABLE DATA           ?   COPY public.appointments (id, patient_id, department_id, staff_id, schedule_id, date, day, serial_no, problem, is_active, created_at, updated_at) FROM stdin;
    public          postgres    false    232   k?      ?          0    100832    approve_leaves 
   TABLE DATA           ?   COPY public.approve_leaves (id, leave_type_id, type, staff_id, apply_date, from_date, to_date, status, reason, created_at, updated_at, note) FROM stdin;
    public          postgres    false    284   ??      ?          0    51329    bank_accounts 
   TABLE DATA           ?   COPY public.bank_accounts (id, date, bank_id, brance_name, balance, ac_no, ac_type, ac_holder, ac_holder_phone, is_active, created_at, updated_at) FROM stdin;
    public          postgres    false    248   ??      ?          0    51355    bank_transetions 
   TABLE DATA           t   COPY public.bank_transetions (id, date, type, bank_account_id, amount, slip_no, created_at, updated_at) FROM stdin;
    public          postgres    false    250   |?      ?          0    34558    banks 
   TABLE DATA           R   COPY public.banks (id, name, note, is_active, created_at, updated_at) FROM stdin;
    public          postgres    false    222   ?      ?          0    51114    beds 
   TABLE DATA           h   COPY public.beds (id, bed_no, note, is_active, created_at, updated_at, type, cost, ward_id) FROM stdin;
    public          postgres    false    234   ??      ?          0    76151    birth_reports 
   TABLE DATA           ?   COPY public.birth_reports (id, name, date, birth_time, gender, father_name, mother_name, nationality, religion, staff_id, address, is_active, created_at, updated_at) FROM stdin;
    public          postgres    false    266   .?      ?          0    34523 	   buildings 
   TABLE DATA           V   COPY public.buildings (id, name, note, is_active, created_at, updated_at) FROM stdin;
    public          postgres    false    220   ??      ?          0    51180    case_studies 
   TABLE DATA           t   COPY public.case_studies (id, department_id, case_study_question_id, is_active, created_at, updated_at) FROM stdin;
    public          postgres    false    240   E?      ?          0    51169    case_study_questions 
   TABLE DATA           a   COPY public.case_study_questions (id, name, note, is_active, created_at, updated_at) FROM stdin;
    public          postgres    false    238   ??      ?          0    133784    cats 
   TABLE DATA           =   COPY public.cats (id, name, age, des, is_active) FROM stdin;
    public          postgres    false    297   n?      ?          0    76175    death_reports 
   TABLE DATA           ?   COPY public.death_reports (id, patient_id, staff_id, father_name, date_of_death, time_of_death, is_active, created_at, updated_at, description, title) FROM stdin;
    public          postgres    false    268   ??      s          0    33064    departments 
   TABLE DATA           _   COPY public.departments (id, name, description, is_active, created_at, updated_at) FROM stdin;
    public          postgres    false    204   %?      u          0    33075    designations 
   TABLE DATA           f   COPY public.designations (id, name, type, description, is_active, created_at, updated_at) FROM stdin;
    public          postgres    false    206   ש      w          0    33086 	   documents 
   TABLE DATA           y   COPY public.documents (id, name, type, staff_id, patient_id, description, is_active, created_at, updated_at) FROM stdin;
    public          postgres    false    208   ת      ?          0    117279    expense_heads 
   TABLE DATA           O   COPY public.expense_heads (id, name, note, created_at, updated_at) FROM stdin;
    public          postgres    false    292   >?      ?          0    117301    expenses 
   TABLE DATA           i   COPY public.expenses (id, expense_head_id, amount, name, date, note, created_at, updated_at) FROM stdin;
    public          postgres    false    294   ??      ?          0    117257    income_heads 
   TABLE DATA           N   COPY public.income_heads (id, name, note, created_at, updated_at) FROM stdin;
    public          postgres    false    290   ?      ?          0    117312    incomes 
   TABLE DATA           g   COPY public.incomes (id, income_head_id, amount, name, date, note, created_at, updated_at) FROM stdin;
    public          postgres    false    296   ??      ?          0    84349    investigation_reports 
   TABLE DATA           ?   COPY public.investigation_reports (id, patient_id, date, staff_id, description, is_active, created_at, updated_at, title) FROM stdin;
    public          postgres    false    270   ??      ?          0    100817    leave_types 
   TABLE DATA           X   COPY public.leave_types (id, name, note, is_active, created_at, updated_at) FROM stdin;
    public          postgres    false    282   ??      {          0    33232    medicins 
   TABLE DATA           j   COPY public.medicins (id, code, name, room_id, cost, note, is_active, created_at, updated_at) FROM stdin;
    public          postgres    false    212   /?      ?          0    51122    modules 
   TABLE DATA           b   COPY public.modules (id, name, note, add, edit, view, delete, created_at, updated_at) FROM stdin;
    public          postgres    false    236   ??      ?          0    76140    notice_boards 
   TABLE DATA           ?   COPY public.notice_boards (id, title, person_type, start_date, end_date, description, is_active, created_at, updated_at) FROM stdin;
    public          postgres    false    264   î      ?          0    84357    operation_reports 
   TABLE DATA           ?   COPY public.operation_reports (id, patient_id, date, staff_id, description, is_active, created_at, updated_at, title) FROM stdin;
    public          postgres    false    272   ??      ?          0    51440    package_services 
   TABLE DATA           k   COPY public.package_services (id, package_id, service_id, qty, amount, created_at, updated_at) FROM stdin;
    public          postgres    false    254   )?      ?          0    51448    packages 
   TABLE DATA           h   COPY public.packages (id, name, discount, discount_type, is_active, created_at, updated_at) FROM stdin;
    public          postgres    false    256   ??      ?          0    51272    patient_case_studies 
   TABLE DATA           ?   COPY public.patient_case_studies (id, patient_id, department_id, case_study_question_id, description, is_active, created_at, updated_at) FROM stdin;
    public          postgres    false    242   i?      ?          0    84398    patient_registers 
   TABLE DATA           ?   COPY public.patient_registers (id, patient_id, bed_id, package_id, service_id, start_date, note, is_active, created_at, updated_at, bed_qty, department_id) FROM stdin;
    public          postgres    false    276   ??      ?          0    51095    patients 
   TABLE DATA           ?   COPY public.patients (id, code, type, name, email, phone_no, blood_type, gender, marital_status, age, dob, nid, nationality, photo, present_address, permanent_address, is_active, created_at, updated_at, religion) FROM stdin;
    public          postgres    false    230   =?      ?          0    100851    payroll_allowances 
   TABLE DATA           h   COPY public.payroll_allowances (id, name, amount, type, payroll_id, created_at, updated_at) FROM stdin;
    public          postgres    false    286   F?      ?          0    100862    payrolls 
   TABLE DATA           ?   COPY public.payrolls (id, basic_salary, earning, deduction, status, staff_id, payment_date, payment_mode, month, note, created_at, updated_at) FROM stdin;
    public          postgres    false    288   ִ      y          0    33130    permissions 
   TABLE DATA           p   COPY public.permissions (id, role_id, module_id, add, view, update, delete, created_at, updated_at) FROM stdin;
    public          postgres    false    210   l?      ?          0    67869    prescription_medicins 
   TABLE DATA           ?   COPY public.prescription_medicins (id, prescription_id, name, qty, unit, medicin_eat_roles, created_at, updated_at) FROM stdin;
    public          postgres    false    262   ??      ?          0    67834    prescriptions 
   TABLE DATA           d   COPY public.prescriptions (id, staff_id, patient_id, is_active, created_at, updated_at) FROM stdin;
    public          postgres    false    258   ?      ?          0    67861    prescriptions_tests 
   TABLE DATA           `   COPY public.prescriptions_tests (id, prescription_id, name, created_at, updated_at) FROM stdin;
    public          postgres    false    260   n?      ?          0    34512    roles 
   TABLE DATA           Y   COPY public.roles (id, name, note, is_active, created_at, updated_at, color) FROM stdin;
    public          postgres    false    218   Ͷ      ?          0    34662    rooms 
   TABLE DATA           U   COPY public.rooms (id, name, room_no, is_active, created_at, updated_at) FROM stdin;
    public          postgres    false    224   ??      ?          0    100796    salaries 
   TABLE DATA           \   COPY public.salaries (id, staff_id, date, type, amount, created_at, updated_at) FROM stdin;
    public          postgres    false    280   	?      ?          0    42874 	   schedules 
   TABLE DATA           ?   COPY public.schedules (id, staff_id, day, start_time, end_time, per_patient_time, max_patient, appointment_type, is_active, created_at, updated_at) FROM stdin;
    public          postgres    false    226   ??      ?          0    51387    services 
   TABLE DATA           ]   COPY public.services (id, name, amount, is_active, created_at, updated_at, note) FROM stdin;
    public          postgres    false    252   ??      ?          0    84423    staff_attendances 
   TABLE DATA           e   COPY public.staff_attendances (id, staff_id, date, note, status, created_at, updated_at) FROM stdin;
    public          postgres    false    278   -?                0    34489    staffs 
   TABLE DATA           ?  COPY public.staffs (id, code, name, email, phone_no, nid, nationality, present_address, permanent_address, specialist, designation_id, department_id, bio, dob, gender, marital_status, blood_type, education, photo, signature, religion, experience, leaving_reason, facebook_url, instagram_url, twitter_url, linkedin_url, bank_name, branch_name, ac_name, ac_no, note, is_active, created_at, updated_at, joining_date, leaving_date) FROM stdin;
    public          postgres    false    216   ??      ?          0    51085    teams 
   TABLE DATA           )   COPY public.teams (id, name) FROM stdin;
    public          postgres    false    228   t?      }          0    33243    tests 
   TABLE DATA           t   COPY public.tests (id, code, name, building_id, room_id, cost, note, is_active, created_at, updated_at) FROM stdin;
    public          postgres    false    214   ??      ?          0    51315 
   user_roles 
   TABLE DATA           R   COPY public.user_roles (id, user_id, role_id, created_at, updated_at) FROM stdin;
    public          postgres    false    246   @?      ?          0    51292    users 
   TABLE DATA           ?   COPY public.users (id, username, password, user_type, staff_id, patient_id, member_id, is_active, created_at, updated_at) FROM stdin;
    public          postgres    false    244   ??      ?          0    133795    userss 
   TABLE DATA           G   COPY public.userss (id, username, password, status, roles) FROM stdin;
    public          postgres    false    298   ?      ?          0    84376    wards 
   TABLE DATA           a   COPY public.wards (id, name, note, is_active, created_at, updated_at, department_id) FROM stdin;
    public          postgres    false    274   :?                 0    0    appointments_id_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public.appointments_id_seq', 31, true);
          public          postgres    false    231            	           0    0    approve_leaves_id_seq    SEQUENCE SET     C   SELECT pg_catalog.setval('public.approve_leaves_id_seq', 5, true);
          public          postgres    false    283            
           0    0    bank_accounts_id_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public.bank_accounts_id_seq', 4, true);
          public          postgres    false    247                       0    0    bank_transetions_id_seq    SEQUENCE SET     F   SELECT pg_catalog.setval('public.bank_transetions_id_seq', 17, true);
          public          postgres    false    249                       0    0    banks_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.banks_id_seq', 12, true);
          public          postgres    false    221                       0    0    beds_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.beds_id_seq', 15, true);
          public          postgres    false    233                       0    0    birth_reports_id_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public.birth_reports_id_seq', 7, true);
          public          postgres    false    265                       0    0    buildings_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public.buildings_id_seq', 13, true);
          public          postgres    false    219                       0    0    case_studies_id_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public.case_studies_id_seq', 18, true);
          public          postgres    false    239                       0    0    case_study_questions_id_seq    SEQUENCE SET     I   SELECT pg_catalog.setval('public.case_study_questions_id_seq', 9, true);
          public          postgres    false    237                       0    0    death_reports_id_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public.death_reports_id_seq', 9, true);
          public          postgres    false    267                       0    0    departments_id_seq    SEQUENCE SET     A   SELECT pg_catalog.setval('public.departments_id_seq', 56, true);
          public          postgres    false    203                       0    0    designations_id_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public.designations_id_seq', 39, true);
          public          postgres    false    205                       0    0    documents_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.documents_id_seq', 2, true);
          public          postgres    false    207                       0    0    expense_heads_id_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public.expense_heads_id_seq', 6, true);
          public          postgres    false    291                       0    0    expense_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public.expense_id_seq', 9, true);
          public          postgres    false    293                       0    0    income_heads_id_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public.income_heads_id_seq', 11, true);
          public          postgres    false    289                       0    0    incomes_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.incomes_id_seq', 14, true);
          public          postgres    false    295                       0    0    investigation_reports_id_seq    SEQUENCE SET     K   SELECT pg_catalog.setval('public.investigation_reports_id_seq', 11, true);
          public          postgres    false    269                       0    0    leave_types_id_seq    SEQUENCE SET     A   SELECT pg_catalog.setval('public.leave_types_id_seq', 14, true);
          public          postgres    false    281                       0    0    medicins_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.medicins_id_seq', 23, true);
          public          postgres    false    211                       0    0    modules_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.modules_id_seq', 1, false);
          public          postgres    false    235                       0    0    notice_boards_id_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public.notice_boards_id_seq', 7, true);
          public          postgres    false    263                       0    0    oparation_reports_id_seq    SEQUENCE SET     F   SELECT pg_catalog.setval('public.oparation_reports_id_seq', 8, true);
          public          postgres    false    271                        0    0    package_services_id_seq    SEQUENCE SET     F   SELECT pg_catalog.setval('public.package_services_id_seq', 63, true);
          public          postgres    false    253            !           0    0    packages_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.packages_id_seq', 33, true);
          public          postgres    false    255            "           0    0    patient_case_studies_id_seq    SEQUENCE SET     K   SELECT pg_catalog.setval('public.patient_case_studies_id_seq', 161, true);
          public          postgres    false    241            #           0    0    patient_registers_id_seq    SEQUENCE SET     G   SELECT pg_catalog.setval('public.patient_registers_id_seq', 46, true);
          public          postgres    false    275            $           0    0    patients_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.patients_id_seq', 15, true);
          public          postgres    false    229            %           0    0    payroll_allowances_id_seq    SEQUENCE SET     H   SELECT pg_catalog.setval('public.payroll_allowances_id_seq', 27, true);
          public          postgres    false    285            &           0    0    payrolls_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.payrolls_id_seq', 26, true);
          public          postgres    false    287            '           0    0    permissions_id_seq    SEQUENCE SET     A   SELECT pg_catalog.setval('public.permissions_id_seq', 1, false);
          public          postgres    false    209            (           0    0    prescription_medicins_id_seq    SEQUENCE SET     K   SELECT pg_catalog.setval('public.prescription_medicins_id_seq', 45, true);
          public          postgres    false    261            )           0    0    prescriptions_id_seq    SEQUENCE SET     C   SELECT pg_catalog.setval('public.prescriptions_id_seq', 42, true);
          public          postgres    false    257            *           0    0    prescriptions_tests_id_seq    SEQUENCE SET     I   SELECT pg_catalog.setval('public.prescriptions_tests_id_seq', 54, true);
          public          postgres    false    259            +           0    0    roles_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.roles_id_seq', 33, true);
          public          postgres    false    217            ,           0    0    rooms_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.rooms_id_seq', 3, true);
          public          postgres    false    223            -           0    0    salaries_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.salaries_id_seq', 12, true);
          public          postgres    false    279            .           0    0    schedules_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public.schedules_id_seq', 28, true);
          public          postgres    false    225            /           0    0    services_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.services_id_seq', 14, true);
          public          postgres    false    251            0           0    0    staff_attendance_id_seq    SEQUENCE SET     G   SELECT pg_catalog.setval('public.staff_attendance_id_seq', 112, true);
          public          postgres    false    277            1           0    0    staffs_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public.staffs_id_seq', 30, true);
          public          postgres    false    215            2           0    0    teams_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.teams_id_seq', 1, true);
          public          postgres    false    227            3           0    0    tests_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.tests_id_seq', 9, true);
          public          postgres    false    213            4           0    0    user_roles_id_seq    SEQUENCE SET     A   SELECT pg_catalog.setval('public.user_roles_id_seq', 186, true);
          public          postgres    false    245            5           0    0    users_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.users_id_seq', 51, true);
          public          postgres    false    243            6           0    0    wards_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.wards_id_seq', 15, true);
          public          postgres    false    273            ?           2606    133804 %   userss PK_3d69bc5aa6e5a3668a00dbee94a 
   CONSTRAINT     e   ALTER TABLE ONLY public.userss
    ADD CONSTRAINT "PK_3d69bc5aa6e5a3668a00dbee94a" PRIMARY KEY (id);
 Q   ALTER TABLE ONLY public.userss DROP CONSTRAINT "PK_3d69bc5aa6e5a3668a00dbee94a";
       public            postgres    false    298            ?           2606    133792 #   cats PK_611e3c0a930b4ddc1541422864c 
   CONSTRAINT     c   ALTER TABLE ONLY public.cats
    ADD CONSTRAINT "PK_611e3c0a930b4ddc1541422864c" PRIMARY KEY (id);
 O   ALTER TABLE ONLY public.cats DROP CONSTRAINT "PK_611e3c0a930b4ddc1541422864c";
       public            postgres    false    297            ?           2606    133794 #   cats UQ_2946bd8f9f4548076d1816289b8 
   CONSTRAINT     `   ALTER TABLE ONLY public.cats
    ADD CONSTRAINT "UQ_2946bd8f9f4548076d1816289b8" UNIQUE (name);
 O   ALTER TABLE ONLY public.cats DROP CONSTRAINT "UQ_2946bd8f9f4548076d1816289b8";
       public            postgres    false    297            ?           2606    133806 %   userss UQ_ebf7c4276686e951413f68ca240 
   CONSTRAINT     f   ALTER TABLE ONLY public.userss
    ADD CONSTRAINT "UQ_ebf7c4276686e951413f68ca240" UNIQUE (username);
 Q   ALTER TABLE ONLY public.userss DROP CONSTRAINT "UQ_ebf7c4276686e951413f68ca240";
       public            postgres    false    298            ?           2606    51111    appointments appointments_pkey 
   CONSTRAINT     \   ALTER TABLE ONLY public.appointments
    ADD CONSTRAINT appointments_pkey PRIMARY KEY (id);
 H   ALTER TABLE ONLY public.appointments DROP CONSTRAINT appointments_pkey;
       public            postgres    false    232            ?           2606    100840 "   approve_leaves approve_leaves_pkey 
   CONSTRAINT     `   ALTER TABLE ONLY public.approve_leaves
    ADD CONSTRAINT approve_leaves_pkey PRIMARY KEY (id);
 L   ALTER TABLE ONLY public.approve_leaves DROP CONSTRAINT approve_leaves_pkey;
       public            postgres    false    284            ?           2606    51337     bank_accounts bank_accounts_pkey 
   CONSTRAINT     ^   ALTER TABLE ONLY public.bank_accounts
    ADD CONSTRAINT bank_accounts_pkey PRIMARY KEY (id);
 J   ALTER TABLE ONLY public.bank_accounts DROP CONSTRAINT bank_accounts_pkey;
       public            postgres    false    248            ?           2606    51363 &   bank_transetions bank_transetions_pkey 
   CONSTRAINT     d   ALTER TABLE ONLY public.bank_transetions
    ADD CONSTRAINT bank_transetions_pkey PRIMARY KEY (id);
 P   ALTER TABLE ONLY public.bank_transetions DROP CONSTRAINT bank_transetions_pkey;
       public            postgres    false    250            ?           2606    34566    banks banks_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.banks
    ADD CONSTRAINT banks_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.banks DROP CONSTRAINT banks_pkey;
       public            postgres    false    222            ?           2606    51119    beds beds_pkey 
   CONSTRAINT     L   ALTER TABLE ONLY public.beds
    ADD CONSTRAINT beds_pkey PRIMARY KEY (id);
 8   ALTER TABLE ONLY public.beds DROP CONSTRAINT beds_pkey;
       public            postgres    false    234            ?           2606    76159     birth_reports birth_reports_pkey 
   CONSTRAINT     ^   ALTER TABLE ONLY public.birth_reports
    ADD CONSTRAINT birth_reports_pkey PRIMARY KEY (id);
 J   ALTER TABLE ONLY public.birth_reports DROP CONSTRAINT birth_reports_pkey;
       public            postgres    false    266            ?           2606    34531    buildings building_pkey 
   CONSTRAINT     U   ALTER TABLE ONLY public.buildings
    ADD CONSTRAINT building_pkey PRIMARY KEY (id);
 A   ALTER TABLE ONLY public.buildings DROP CONSTRAINT building_pkey;
       public            postgres    false    220            ?           2606    51185    case_studies case_studies_pkey 
   CONSTRAINT     \   ALTER TABLE ONLY public.case_studies
    ADD CONSTRAINT case_studies_pkey PRIMARY KEY (id);
 H   ALTER TABLE ONLY public.case_studies DROP CONSTRAINT case_studies_pkey;
       public            postgres    false    240            ?           2606    51177 .   case_study_questions case_study_questions_pkey 
   CONSTRAINT     l   ALTER TABLE ONLY public.case_study_questions
    ADD CONSTRAINT case_study_questions_pkey PRIMARY KEY (id);
 X   ALTER TABLE ONLY public.case_study_questions DROP CONSTRAINT case_study_questions_pkey;
       public            postgres    false    238            ?           2606    76183     death_reports death_reports_pkey 
   CONSTRAINT     ^   ALTER TABLE ONLY public.death_reports
    ADD CONSTRAINT death_reports_pkey PRIMARY KEY (id);
 J   ALTER TABLE ONLY public.death_reports DROP CONSTRAINT death_reports_pkey;
       public            postgres    false    268            ?           2606    33072    departments departments_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public.departments
    ADD CONSTRAINT departments_pkey PRIMARY KEY (id);
 F   ALTER TABLE ONLY public.departments DROP CONSTRAINT departments_pkey;
       public            postgres    false    204            ?           2606    33083    designations designations_pkey 
   CONSTRAINT     \   ALTER TABLE ONLY public.designations
    ADD CONSTRAINT designations_pkey PRIMARY KEY (id);
 H   ALTER TABLE ONLY public.designations DROP CONSTRAINT designations_pkey;
       public            postgres    false    206            ?           2606    33094    documents documents_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.documents
    ADD CONSTRAINT documents_pkey PRIMARY KEY (id);
 B   ALTER TABLE ONLY public.documents DROP CONSTRAINT documents_pkey;
       public            postgres    false    208            ?           2606    117287     expense_heads expense_heads_pkey 
   CONSTRAINT     ^   ALTER TABLE ONLY public.expense_heads
    ADD CONSTRAINT expense_heads_pkey PRIMARY KEY (id);
 J   ALTER TABLE ONLY public.expense_heads DROP CONSTRAINT expense_heads_pkey;
       public            postgres    false    292            ?           2606    117309    expenses expense_pkey 
   CONSTRAINT     S   ALTER TABLE ONLY public.expenses
    ADD CONSTRAINT expense_pkey PRIMARY KEY (id);
 ?   ALTER TABLE ONLY public.expenses DROP CONSTRAINT expense_pkey;
       public            postgres    false    294            ?           2606    117265    income_heads income_heads_pkey 
   CONSTRAINT     \   ALTER TABLE ONLY public.income_heads
    ADD CONSTRAINT income_heads_pkey PRIMARY KEY (id);
 H   ALTER TABLE ONLY public.income_heads DROP CONSTRAINT income_heads_pkey;
       public            postgres    false    290            ?           2606    117320    incomes incomes_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.incomes
    ADD CONSTRAINT incomes_pkey PRIMARY KEY (id);
 >   ALTER TABLE ONLY public.incomes DROP CONSTRAINT incomes_pkey;
       public            postgres    false    296            ?           2606    84354 0   investigation_reports investigation_reports_pkey 
   CONSTRAINT     n   ALTER TABLE ONLY public.investigation_reports
    ADD CONSTRAINT investigation_reports_pkey PRIMARY KEY (id);
 Z   ALTER TABLE ONLY public.investigation_reports DROP CONSTRAINT investigation_reports_pkey;
       public            postgres    false    270            ?           2606    100825    leave_types leave_types_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public.leave_types
    ADD CONSTRAINT leave_types_pkey PRIMARY KEY (id);
 F   ALTER TABLE ONLY public.leave_types DROP CONSTRAINT leave_types_pkey;
       public            postgres    false    282            ?           2606    33240    medicins medicins_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.medicins
    ADD CONSTRAINT medicins_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.medicins DROP CONSTRAINT medicins_pkey;
       public            postgres    false    212            ?           2606    51130    modules modules_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.modules
    ADD CONSTRAINT modules_pkey PRIMARY KEY (id);
 >   ALTER TABLE ONLY public.modules DROP CONSTRAINT modules_pkey;
       public            postgres    false    236            ?           2606    76148     notice_boards notice_boards_pkey 
   CONSTRAINT     ^   ALTER TABLE ONLY public.notice_boards
    ADD CONSTRAINT notice_boards_pkey PRIMARY KEY (id);
 J   ALTER TABLE ONLY public.notice_boards DROP CONSTRAINT notice_boards_pkey;
       public            postgres    false    264            ?           2606    84362 (   operation_reports oparation_reports_pkey 
   CONSTRAINT     f   ALTER TABLE ONLY public.operation_reports
    ADD CONSTRAINT oparation_reports_pkey PRIMARY KEY (id);
 R   ALTER TABLE ONLY public.operation_reports DROP CONSTRAINT oparation_reports_pkey;
       public            postgres    false    272            ?           2606    51445 &   package_services package_services_pkey 
   CONSTRAINT     d   ALTER TABLE ONLY public.package_services
    ADD CONSTRAINT package_services_pkey PRIMARY KEY (id);
 P   ALTER TABLE ONLY public.package_services DROP CONSTRAINT package_services_pkey;
       public            postgres    false    254            ?           2606    51456    packages packages_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.packages
    ADD CONSTRAINT packages_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.packages DROP CONSTRAINT packages_pkey;
       public            postgres    false    256            ?           2606    51277 .   patient_case_studies patient_case_studies_pkey 
   CONSTRAINT     l   ALTER TABLE ONLY public.patient_case_studies
    ADD CONSTRAINT patient_case_studies_pkey PRIMARY KEY (id);
 X   ALTER TABLE ONLY public.patient_case_studies DROP CONSTRAINT patient_case_studies_pkey;
       public            postgres    false    242            ?           2606    84403 (   patient_registers patient_registers_pkey 
   CONSTRAINT     f   ALTER TABLE ONLY public.patient_registers
    ADD CONSTRAINT patient_registers_pkey PRIMARY KEY (id);
 R   ALTER TABLE ONLY public.patient_registers DROP CONSTRAINT patient_registers_pkey;
       public            postgres    false    276            ?           2606    51103    patients patients_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.patients
    ADD CONSTRAINT patients_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.patients DROP CONSTRAINT patients_pkey;
       public            postgres    false    230            ?           2606    100859 *   payroll_allowances payroll_allowances_pkey 
   CONSTRAINT     h   ALTER TABLE ONLY public.payroll_allowances
    ADD CONSTRAINT payroll_allowances_pkey PRIMARY KEY (id);
 T   ALTER TABLE ONLY public.payroll_allowances DROP CONSTRAINT payroll_allowances_pkey;
       public            postgres    false    286            ?           2606    100870    payrolls payrolls_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.payrolls
    ADD CONSTRAINT payrolls_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.payrolls DROP CONSTRAINT payrolls_pkey;
       public            postgres    false    288            ?           2606    33138    permissions permissions_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public.permissions
    ADD CONSTRAINT permissions_pkey PRIMARY KEY (id);
 F   ALTER TABLE ONLY public.permissions DROP CONSTRAINT permissions_pkey;
       public            postgres    false    210            ?           2606    67877 0   prescription_medicins prescription_medicins_pkey 
   CONSTRAINT     n   ALTER TABLE ONLY public.prescription_medicins
    ADD CONSTRAINT prescription_medicins_pkey PRIMARY KEY (id);
 Z   ALTER TABLE ONLY public.prescription_medicins DROP CONSTRAINT prescription_medicins_pkey;
       public            postgres    false    262            ?           2606    67839     prescriptions prescriptions_pkey 
   CONSTRAINT     ^   ALTER TABLE ONLY public.prescriptions
    ADD CONSTRAINT prescriptions_pkey PRIMARY KEY (id);
 J   ALTER TABLE ONLY public.prescriptions DROP CONSTRAINT prescriptions_pkey;
       public            postgres    false    258            ?           2606    67866 ,   prescriptions_tests prescriptions_tests_pkey 
   CONSTRAINT     j   ALTER TABLE ONLY public.prescriptions_tests
    ADD CONSTRAINT prescriptions_tests_pkey PRIMARY KEY (id);
 V   ALTER TABLE ONLY public.prescriptions_tests DROP CONSTRAINT prescriptions_tests_pkey;
       public            postgres    false    260            ?           2606    34520    roles roles_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.roles
    ADD CONSTRAINT roles_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.roles DROP CONSTRAINT roles_pkey;
       public            postgres    false    218            ?           2606    34667    rooms rooms_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.rooms
    ADD CONSTRAINT rooms_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.rooms DROP CONSTRAINT rooms_pkey;
       public            postgres    false    224            ?           2606    100801    salaries salaries_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.salaries
    ADD CONSTRAINT salaries_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.salaries DROP CONSTRAINT salaries_pkey;
       public            postgres    false    280            ?           2606    42882    schedules schedules_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.schedules
    ADD CONSTRAINT schedules_pkey PRIMARY KEY (id);
 B   ALTER TABLE ONLY public.schedules DROP CONSTRAINT schedules_pkey;
       public            postgres    false    226            ?           2606    51392    services services_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.services
    ADD CONSTRAINT services_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.services DROP CONSTRAINT services_pkey;
       public            postgres    false    252            ?           2606    84431 '   staff_attendances staff_attendance_pkey 
   CONSTRAINT     e   ALTER TABLE ONLY public.staff_attendances
    ADD CONSTRAINT staff_attendance_pkey PRIMARY KEY (id);
 Q   ALTER TABLE ONLY public.staff_attendances DROP CONSTRAINT staff_attendance_pkey;
       public            postgres    false    278            ?           2606    34497    staffs staffs_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public.staffs
    ADD CONSTRAINT staffs_pkey PRIMARY KEY (id);
 <   ALTER TABLE ONLY public.staffs DROP CONSTRAINT staffs_pkey;
       public            postgres    false    216            ?           2606    51090    teams teams_id_key 
   CONSTRAINT     K   ALTER TABLE ONLY public.teams
    ADD CONSTRAINT teams_id_key UNIQUE (id);
 <   ALTER TABLE ONLY public.teams DROP CONSTRAINT teams_id_key;
       public            postgres    false    228            ?           2606    33251    tests tests_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.tests
    ADD CONSTRAINT tests_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.tests DROP CONSTRAINT tests_pkey;
       public            postgres    false    214            ?           2606    51320    user_roles user_roles_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public.user_roles
    ADD CONSTRAINT user_roles_pkey PRIMARY KEY (id);
 D   ALTER TABLE ONLY public.user_roles DROP CONSTRAINT user_roles_pkey;
       public            postgres    false    246            ?           2606    51300    users users_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.users DROP CONSTRAINT users_pkey;
       public            postgres    false    244            ?           2606    84384    wards wards_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.wards
    ADD CONSTRAINT wards_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.wards DROP CONSTRAINT wards_pkey;
       public            postgres    false    274            ?   x   x?}???0???l?GX????.?
? !\?ӿ?8D???K??	~#HPi?i???6/+?_??b??0D?j:I?+L??D[ֹ??BT;??I????L??k?;ً??;????I? "WM5      ?   ?   x?}?Mj1???)?/1??3?=@??nL'?M&ġ篝??i	?zH??4?????:_?02??v8?%?Z????i?<!?)??O<K??^?f|B?Y&I{Fo?r?????K???5ĶR???????|??_?j<?z?=7?A?8l?J"o?q??/????B?#??:HK2??Yr???
iQڵDa?g??n,????5?qGO?b? ?'T?M?rc??5??;??J?v?p3      ?   ?   x?M??
?0F盧?.ߗ??d?????I\?Pl-?????A8?9? ??q8?????2?A_?loˤv?o]?u??? d{?U?˳?l????)3?1'?o?T???jD˾?XBv!????c>?!?      ?   ?   x?}?=
?0???>E?!ɟl?sc͔?z?:??BA?^? 1???
??]?L??s|;?-?3????X? 8q????oU??q???P??~?m??V????_?Te?Ep?̊F?]^?:?H(??D0??y??Y?6?      ?   r   x?M?;?0??)?#??c??vX)s??|? ??v?f?????8> $??%???T?˅???H?U??چ3?ޏ?x=a???lo??F?gA??,R>
յ ??;???A ?      ?   ?   x?}?;?@???{??QV???;.?	h"?Ѕ?/6(D??>?2Ӽ\z??` .?P$X=p??N?5/}?0B??>?jΜ?8F?ku??Ul?cyǄ??ţkq?.?rDqdϖ?????M?9?Bx?~/?      ?   }   x?3?J?(??4202?54?5?D0M̭?H???X????-571'??-?$#?H!/17??7?vJ?K?ILI-??????K)?,??42?L)NK/N?`?d??L?LM?L͌@???????? ??,g      ?   z   x?}̻?0???~??U"????]:D??Ё?o@*?8?o:???????n???b^?A??????%?/??k)?Z???8<Z?????;1tr??@???}??BkË??x
̼?010      ?   \   x?}?A
?0?ur
?Ғ_?4?Y<??G?,?zx??R??IC?(?l@??Zu?]?'1??i,޲kvT???
ß?Ԑ۠)?-??6?g??2???#?      ?   ?   x?m??
?0??u?????t??1??&E!E[?J߾q#E?????q??????˨??p??g-b?Ш?@.4+???`xg.?w??3@?r??H?Gű]ɝdP!???P??_:&?Ej?~?Ez?f?]?u?f<?#,?T?q???+????<???4?P????5?H)??GU      ?      x?????? ? ?      ?   ?   x?}?1
?0Eg??K?$Gv?t?	???K;Թ??Kq(}??!?&??i?-O?H???ç???7?:?P??Z?????k??+0_T ,????O-?ʢѿ????^!Q?ߑ5,???uM.?5??p?8}      s   ?   x?U?1?0E???2???=?3X?0?PpH,????o???N\b?j??~??8eѧ?&?  ? Td#29????;B?Bǵeh?q???m?9??????U??"f?w???_?+?l??Մn?yѾ?1.???? ??3?6???????ߧ???fS??R? ?<?      u   ?   x?}?=k?0???Wx/:??X?;:e???2??$e迯??:D	???ÉWL?}??b??y?𺬦i ??????Hz?^? U?H?$Bf8-?[??B?uM??Ns??E?R??>??-?d?-??? ???p?M?=???Q???E??z?B=??Z?-BU?y/??R?)?<???v8??7?'#?s{?>B??4??zh???NS"5	ҶHn?Oy??Q54??z)??5݀w?D?T㝆      w   W   x?3?t?//I?U(H,??L??I?42?4??H???W??/WH,JU??/??,?4202?5??56P04?20?21?353?60?#????? ??      ?   Z   x?3??H????L,NIaN##C]C 2Q04?2??2??341?60CH?*?X?Z???Z e?L?aT?`:L??,M???????? 
?"?      ?   g   x?}?1? ??W???
t~A[4v????hb????`??&?1m?BYI????nvw?L?^[?[?~0?{,帿rYS??K????[~"?5"^d?$?      ?   T   x?34?L,NI0?id`d?kD?
?V?FV&?z&???fx??,9=RS?sS9qed?gdl??(s+S=cCc?Q1z\\\ W?"?      ?   e   x?}??
?0C绯pK??	?g8??8??????""$K^q??!-?JV:9??J?O??F??$Z???E??X<	Hq?שԻ?)???FU?|?>???wԅ$?      ?   ?   x?u?=? ?ٜ"{???=DN?)?R?-??
C?R$O???q`???8*2p,i[???-뒷=?ǒ?u?h@G?R?P???(s??Ix@???%?ԀdT?ب?$??Dp6?????^z?;^???o`????/"Y????m?"?ΐ/??????+?(?????	?`?      ?   f   x?34?tJ,?LV?IM,K?L,NIa?N##C]CC]C+S+C3=C3m3)3+3+C#=???	?cJYb^r*~???,??L-???????? :>&      {   g   x?}?;
?@DѸz???]3ӂ?p&?'????
b$?␘'o?}?K?Ua???k??Jk??ʬK?i
)?Z?#	#t]}?a?
??O???+?$???f'L      ?      x?????? ? ?      ?   ?   x???1?0???W?.?4?6?? .:??j?4??????B??p???;??[ϰC$qp?tw?HU?0%f??T?D???wv]?ɇ?>B=?0?Al?n?޷??+Tm4v.9z????D?(`?Z??'?Ѽ(4???q???kl K???0?,_??YU7U????~?+=??2ΟW?
@?????w?*?(????????y      ?   |   x?}?;?0D??S??b????9M??1B?b?_`) W)??7z3? B?=sO???mw(M?(??F??p?ȟ???)?/???[?qη=?Kz=U?i??)??s?9???@???[_?ϡJ*???,t/"      ?   ?   x?????0??=?????C2D'`?9RZ?(H?ܞ??ɲ	(?Q !ឹ?ܱ?h?c?!??"4m??ԩL??0??Wވ݁8(????r?KQ?c?%P??nN?9??7@n0r3?g	?O?z?UTۙL?W?XWwg?h
B?d??4(D?$i????3D|???      ?   q   x?36?,I-.?42?30?H-JN?+ILO?	??X*?Y?[??Y?j????26?HL???????ib 6?-?"5?P#SC#+S+cs=CKdC1??b???? C?%S      ?   s   x?}?A
?@??u?݋!/?d&g?F=@??m?Mk???Ճ?Q%2Z?myE?(F`T??i-?9j??\?:t|u#g????i???N]tt???n?{??Ejpm??>?r?R???1?      ?   A   x?31???44?46?FF???@d?Y??D?%Hb
?fV??V?&z&f??f??9M͹b???? ??o      ?   ?  x??T[o? ~>?~??8??S[i???ij?T???NL??;???Ij?xjg??||7@b???{[t?~???퐵?)??oo???Ȧk@H%??p_???%<?v^h?Q?K?%?+*-?-eĘ???s.?]?????<????غ?3w@?΃?W&?f?qY&7T}P?|[|?,j?*?Ҕ?]?n??t??ō)
??H?l8?????;?/?????T?̈?ߥ?t??)??????+<[8i5?cN{b*ƒ?-*?S4?r????oݟ?5צ??"????? 6a??(?\X??H?ș??_ڵ?ιЧLF???4'K??F?kN6???U?c}?e??;j?S9O?+\?g?!??X3??9?8?(??2#??y?}to~T???v?8__?DNNG?P???LY)	???St???ΐY?-RJ"1/m????Z??Ja&,?C??<_??n=K.NL??*K9a???Ex?aW??????y?e??ub?Y,??Cz      ?   ?   x??ν
?0?Yz???FRd??Y???	Y\?~??L%4?
??q??Z%
DP?^?:?D>q?p`M???h?H???>,??2?^.?u??r???퓶????SE??۝j	g?B~V(#?;???K@?7IET      ?   ?   x?m?M
?0?דS???k???pHk]J????????o??????-????p??)?0???x4?P????iNlI-??????2]Q?kEA"l&?4Z???ѐ???V???j?D??c??z䨫??!?=?1?      y      x?????? ? ?      ?   ?   x?}?=
?0?Y>E?????:KCH?R????n?CZ*?A<?!32?[??I?d?u??}?&<3ς?%??k???P?D??#1@
j??Õ?p??xH6??|????????ח%??????;??@/9??F?4?      ?   ?   x?Uɱ? ?ڞ?>?????ga?Wh#]wAa\?Љ
Tz?G?nx|?jd{/?-ݦ??W?      ?   O   x?}̱?0?:?"=J?ǁxZ& ?? Q@}?yK?i?̮?J?P3?ín?E???9????0????c?"rɰD      ?   ?   x?}??
?0??s?އ?I3??v?x???
?!???;????G??}=?Z??4????dKӔ?
?<Z??f??????"IR?֎???)+??GZV!H?EhOd????b?????7e??{\A|{Bm???S2Cp???$???Zm?EgO?i??ާ]c      ?   t   x?E?;?0??)??l?]???4)?D?"???q???H?w$?A
????jH?-('x??n?,"d?9?????k????}P?????ZRC	??]G?%[?0??t???9?C S      ?   ?   x?}?1?0E???(ַ?qF6????t ?/J#???H^?????D?@80?;]???) 6??Z??G???k???1?????+?????y??n=??????̋9?Q???V??Bfq??7?С?m????j7???????D?      ?   ?   x?}?1n? Ek8??h??0?H?4??"?FQ?-??a1Y٬c????c 0??y?/?o?Հ?'????)e"?'
kjHǊ?ü|?????e??eg??<?γ ?N?/Ȗ?[??s????}?<?m
7EA?)0??)???8??tȢP=JA??4??,???R?5??????J[d?S?W4????????͞K6?E?%??R??7???"pCcLG?e???1???y:d_???:?*      ?   {   x?}???0Dg?+??F?c?oa??)(????* N???;xV?????'0?D? $<0B??$??jr???ݑ?uq?O?????t܉??2]fd??(?T???n???[??=x???+?0?      ?   \  x???=O?0?g?W??Z?s???RBʊ??h'?@???q???WUYrz??Wv??@???? ???,?>?????????w??^w???Q?*?~A??D??P? 0?3?????01Q??X?(МQ?'????PC??????أV?7OG2:?f&N?x??֖??ᙦ0}?%??/?i?u?t:?1???Ԯ???<?`??g?0q}_??+?(??j,???J??nx??)?4?3?H?&32?"?j2?"K???݊???9?|??ɒ?<ҮH[??K7?J?CPW??2?U*Wf[?1גIF?+?Vp??j?$??J+Rb???L????2?v??*??DF?YI)?};<?         ?  x???Mo?0?ϳ???j-|J8?U??P?T?2-?EV?????l I٤M?EF??<~ǂ?????]?_??;????RKZ??^?c_?X????}g	*?/?r?cl'??Q˃$??|?????C?ʇ?A??/O??K?_??It-?Ta*a:V????m????Y6\?\??=v?ݩ??m?Wu?M;P\???"?ı????R?M? t????s]??tO??U??-L?&?sp?};?YQ???B?ƭd?k??G???j?"c??x8?+?C9b?He?}=8???)?,h.?Q?2C?Q+?\??%??3?P?RAR?׌.??Ή???s??!ጃ?Gh?~?`?4?<?<#R?''????? ?b????p!B???,f?[O
?U???#?b5?e???<7??"N?45?Dl??kחn?G'0?nz?}BM<z!,?$?????lhv?-?l6?,?W?      ?   !   x?3??/)I??H?U??/).(-?????? m??      }   ?   x?}?;1??9??(????sN??T???????0?5????v?q?P"h?i?A%¢?"??zZ?N?V?ڠF:?Wf1?)??zN]?kY?I9ȄcTqҜ?>C6]u?>?K???d???IA??ߜ,ܠNnBx !q2?      ?   <   x?347?4??42?4202?54?52Q04?21?2?г4??60?#?ehn?oA??=... ^#E      ?   ?   x?3????/.?,I??T1JT14PIL3?pq?q??L6?p?s1???w?0.???r?M)?
7ά*?,M???p?2w*??.ILK?42????N##C]C]#Cc+c+S=#m3<R\1z\\\ u?%?      ?      x?????? ? ?      ?   d   x?]?K
?0C?3?p/-???=??????????????OM?^?????-?$N` ??????????Ҁ?'? ??誇NB??AJ????hDq??2?%?%?     