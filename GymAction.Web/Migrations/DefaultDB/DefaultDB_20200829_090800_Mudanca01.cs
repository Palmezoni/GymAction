using FluentMigrator;

namespace GymAction.Migrations.DefaultDB
{
    [Migration(20200829090800)]
    public class DefaultDB_20200829_090800_Mudanca01 : AutoReversingMigration
    {
        public override void Up()
        {
            Alter.Table("PLANO_AULA")
                    .AddColumn("COD_REGISTRO").AsInt32().NotNullable()
                        .PrimaryKey().Identity();

            Alter.Table("CLIENTE_PLANO_AULA")
                    .AddColumn("COD_REGISTRO").AsInt32().NotNullable()
                        .PrimaryKey().Identity();
        }
    }
}