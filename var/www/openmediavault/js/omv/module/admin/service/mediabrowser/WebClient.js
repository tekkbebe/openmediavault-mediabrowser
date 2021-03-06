/**
 * @license   http://www.gnu.org/licenses/gpl.html GPL Version 3
 * @author    Volker Theile <volker.theile@openmediavault.org>
 * @author    OpenMediaVault Plugin Developers <plugins@omv-extras.org>
 * @copyright Copyright (c) 2009-2013 Volker Theile
 * @copyright Copyright (c) 2013-2014 OpenMediaVault Plugin Developers
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */
// require("js/omv/WorkspaceManager.js")
// require("js/omv/workspace/panel/Panel.js")

Ext.define("OMV.module.admin.service.mediabrowser.WebClient", {
    extend : "OMV.workspace.panel.Panel",

    initComponent : function() {
        var me = this;
        var link = 'https://' + location.hostname + ':8920/mediabrowser';

        me.html = "<iframe src='" + link + "' width='100%' height='100%' />";
        me.callParent(arguments);
    }
});

OMV.WorkspaceManager.registerPanel({
    id        : "webclient",
    path      : "/service/mediabrowser",
    text      : _("Web Client"),
    position  : 20,
    className : "OMV.module.admin.service.mediabrowser.WebClient"
});
